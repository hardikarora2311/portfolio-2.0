import React from "react"
import heroGif from "../assets/images/wave-black-new.gif"
import Timeline from "../components/Timeline"
import Projects from "../components/Projects"
import Namecard from "../components/Namecard"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default function Home() {
  return(
    <Layout>
      <header className="hero">
        <img src= {heroGif} className="hero-img" alt="wave gif"/>
        <div className="hero-text">
          <h2>HI, I AM HARDIK ARORA</h2>
          <h1>I help local businesses and early startups build their online presence.</h1>
          <div className="hero-links">
              <a href="/" className="link hero-link-primary">BOOK A FREE CALL</a>
              <Link className="link hero-link-secondary">VIEW MY WORK →</Link>   
          </div>
        </div>
      </header>
      <section className="about-work">
        <h3>I help you with building a website which will be</h3>
        <div className="keywords">
           BLAZING FAST. RESPONSIVE. CUSTOMISABLE.
        </div>
        <p>At the end, you'll experience a <span>conversion</span>-centered, <span>fast</span> performing, & <span>SEO</span> friendly website.</p>
      </section>


      <section className="process">
        <div className="heading">
          <h3>PROCESS</h3>
          <p>A WELL-STRUCTURED PROCESS FOR BUILDING YOUR NEW WEBSITE.</p>
        </div>
        <p className="process-desc">
      We'll go through this process together to make sure that the newly-designed website hits the mark.
        </p>
        <Timeline/>
      </section>

      <Projects id="projects"/>
      <Namecard/>
      

      
    </Layout>
  )
}
