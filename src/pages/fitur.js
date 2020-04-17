import React from "react"
import "../styles/styles.scss"


import Header from  "../components/header"
import SecOne from  "../components/fiturSecOne"
import SecTwo from  "../components/fiturSecTwo"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'



const Fitur = () => (
    <div>
       <Helmet>
        <link rel="icon" href={favicon} />
        </Helmet>
        
        <Header/>    

        <SecOne/>
        <SecTwo/>
        
        <Subscribe/>

        <Footer/>
    </div>
)

export default Fitur
