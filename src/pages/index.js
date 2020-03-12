import React from "react"
import "../styles/styles.scss"


import Header from  "../components/header"
// import Banner from "../components/banner"
// import AboutBlurb from "../components/aboutBlurb"
// import VideoSection from "../components/videoSection"
// import Footer from "../components/footer"
import SectionOne from "../components/sectionOne"
import SectionTwo from "../components/sectionTwo"
import SectionThree from "../components/sectionThree"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"


const IndexPage = () => (
  <div>
   <Header/>    
   <br/><br/><br/><br/>

  <SectionOne/>
  <br/><br/><br/><br/><br/><br/><br/>
  <SectionTwo/>
  <br/><br/><br/><br/><br/><br/><br/>
  <SectionThree/>

  <br/><br/><br/><br/>
  <Subscribe/>

  <Footer />

  </div>
)

export default IndexPage
