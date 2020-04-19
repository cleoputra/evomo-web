import React from "react"
import "../styles/styles.scss"
import {Container, Row, Button, Card, Col} from 'react-bootstrap'


import Header from  "../components/header"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import '../styles/global.css'
import webinar1 from "../images/webinar_1.jpg"

import favicon from '../images/icon.png'
import Helmet from 'react-helmet'



const Webinar = () => (
    <div>

        <Helmet>
            <link rel="icon" href={favicon} />
        </Helmet>

        <Header/>   

        <Container className="partition mthead">
            <Row className="justify-content-md-center">
                <Col md={{ span: 5, offset: 1, order: 1 }} large={6} xs={{order: 12}}>
            
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={webinar1} />
                    <Card.Body>
                        <Card.Title>Online Seminar IoT: Internet of Things Kini dan Nanti</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCGdrHsFWS-ANcf22JCznvv5div7VLyDlpxHSyMExufA_rww/viewform?usp=sf_link" target="blank"><Button variant="primary">Daftar Sekarang, Gratis!</Button></a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>

        <Subscribe/>

        <Footer/>
    </div>
)

export default Webinar
