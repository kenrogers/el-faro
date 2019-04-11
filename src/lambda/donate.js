require('dotenv').config({ path: '../../.env.development' })

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = function(event, context, callback) {
  // Only do something if this is a POST request
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: {}
    })
  }

  const data = JSON.parse(event.body)

  if (!data.token || !data.amount || !data.idempotency_key) {
    console.error('Required information is missing.')

    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({ status: 'missing-information' })
    })

    return
  }

  stripe.charges.create(
    {
      currency: 'usd',
      amount: data.amount,
      source: data.token.id,
      receipt_email: data.token.email,
      description: 'Donated to El Faro'
    },
    { idempotency_key: data.idempotency_key },
    (err, charge) => {
      if (err !== null) {
        console.log(err)
      }
      let status =
        charge == null || charge.status !== 'succeeded'
          ? 'failed'
          : charge.status

      callback(null, {
        statusCode,
        headers,
        body: JSON.stringify({ status })
      })
    }
  )
}
