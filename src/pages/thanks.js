import React from 'react'
import Layout from '../components/Layout'
import Namecard from '../components/Namecard'
import SEO from '../components/SEO'

const Thanks = () => {
  return (
    <Layout>
      <SEO />
        <section className="about-work thanks">
          <h3>Thankyou for contacting, I'll get back to you super soon.</h3>
        </section>
        <Namecard/>
    </Layout>
  )
}

export default Thanks