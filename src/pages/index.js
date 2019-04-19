import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import orphanage1 from '../images/orphanage1.jpg'
import orphanage2 from '../images/orphanage2.JPG'
import orphanage3 from '../images/orphanage3.JPG'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="El Faro" keywords={[`el faro`, `donate`]} />

        <div className="text-center">
          <h1 className="mb-4 text-5xl">Donate to El Faro</h1>
          <p className="mb-4 max-w-md m-auto text-lg leading-normal text-left">
            Welcome to the giving page for the El Faro Orphanage located near
            Guadalupe Victoria in Baja Mexico. El Faro exists not only to care
            for the physical needs of orphans and children removed from their
            families but also to extend love and hope of Jesus to all the kids
            who come in. While the government places children here, it offers
            very little financial support. Therefore, they are only able to
            operate successfully with help from individuals and churches. All of
            the funds raised go towards feeding, clothing and providing for the
            basic needs of these children. Due to increased regulations by the
            government, donations are needed more than ever so know that all
            donations make an incredible difference.{' '}
          </p>
          <script src="https://donorbox.org/widget.js" paypalExpress="false" />
          <iframe
            src="https://donorbox.org/embed/el-faro-orphanage"
            height="685px"
            width="100%"
            style={{
              maxWidth: '425px',
              minWidth: '310px',
              maxHeight: 'none!important'
            }}
            seamless="seamless"
            name="donorbox"
            frameborder="0"
            scrolling="no"
            allowpaymentrequest
            title="El Faro Donation Form"
          />
          <h2 className="text-left mb-4">The Orphanage</h2>
          <div className="flex flex-1 flex-row flex-wrap justify-center align-center">
            <img
              className="w-full self-center mb-3 shadow-md rounded"
              src={orphanage1}
              alt="Palm trees and the orphanage grounds."
            />
            <img
              className="w-full self-center mb-3 shadow-md rounded"
              src={orphanage2}
              alt="A wall of the orphanage with a mural of a lighthouse."
            />
            <img
              className="w-full self-center mb-3 shadow-md rounded"
              src={orphanage3}
              alt="Palm trees, vans, and metal structures on the orphanage property."
            />
            {/* <img
              className="w-full self-center mb-3 shadow-md rounded"
              src={orphanage4}
              alt="Walkway and patio outside of the orphanage main building."
            /> */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
