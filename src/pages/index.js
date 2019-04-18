import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import uuid from "uuid/v4";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thanks: ""
    };
    this.onToken = this.onToken.bind(this);
  }
  async onToken(token) {
    const json = await axios.post("/.netlify/functions/donate", {
      token,
      idempotency_key: uuid()
    });
    if (json.data.status === "succeeded") {
      this.setState({
        thanks: "🎉 Thank you for your donation! You're awesome! 🎉"
      });
    }
  }
  render() {
    return (
      <Layout>
        <SEO title="El Faro" keywords={[`el faro`, `donate`]} />

        <div className="text-center">
          <h1 className="mb-4">Donate to El Faro</h1>

          <script src="https://donorbox.org/widget.js" paypalExpress="false" />
          <iframe
            src="https://donorbox.org/embed/el-faro-orphanage"
            height="685px"
            width="100%"
            style={{
              maxWidth: "425px",
              minWidth: "310px",
              maxHeight: "none!important"
            }}
            seamless="seamless"
            name="donorbox"
            frameborder="0"
            scrolling="no"
            allowpaymentrequest
          />
          {/* <br />
          {this.amount > 0 ? (
            <StripeCheckout
              description="Donate to El Faro"
              stripeKey={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
              token={this.onToken}
              amount={this.amount}
            />
          ) : (
            ''
          )}
          <p>{this.state.thanks ? this.state.thanks : ''}</p> */}
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
