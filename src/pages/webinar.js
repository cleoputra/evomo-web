import React from "react"
import "../styles/styles.scss"
import {Container, Row, Button, Card, Col} from 'react-bootstrap'


import Header from  "../components/header"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import '../styles/global.css'
import webinar1 from "../images/webinar_2.jpeg"

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
                <Col md={{ span: 3,  order: 1 }} large={6} xs={{order: 12}}>
            
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={webinar1} />
                        <Card.Body>
                            <Card.Title>“Go Lang dan Python dalam <i>development</i> IoT“</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSejgPdh-tYp9SKw3tlFVNwqW_c9CwMUpSLDYRC5CX4jgC4EEg/viewform" target="blank"><Button variant="primary">Daftar Sekarang, Gratis!</Button></a>
                        </Card.Body>
                        <hr/>
                    </Card>
                
                </Col>
            </Row>

        </Container>

        <Subscribe/>

        <Footer/>
    </div>
)

export default Webinar
