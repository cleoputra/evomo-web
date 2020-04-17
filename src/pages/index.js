import React from "react"
import "../styles/styles.scss"


import Header from  "../components/header"
import SectionOne from "../components/sectionOne"
import SectionTwo from "../components/sectionTwo"
import SectionThree from "../components/sectionThree"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'



const IndexPage = () => (
  <div>
    <Helmet>
        <link rel="icon" href={favicon} />
    </Helmet>
    
    <Header/>    

    <SectionOne/>
    <SectionTwo/>
    <br/><br/><br/><br/>
    <SectionThree/>

    <br/><br/><br/><br/>
    <Subscribe/>

    <Footer />
  </div>
)

export default IndexPage
