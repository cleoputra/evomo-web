import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/global.css'
import image1 from "../images/f2.png"

const FiturSectionOne = () =>{
    return(
        <div>
            <Container className="partition">
            <Row className="justify-content-md-center">
                <Col md={{ span: 5, offset: 1, order: 1 }} large={6} xs={{order: 12}}>
                    <h1 className="sb resp">Monitoring Kondisi <br/>Kapanpun dan <br/>Dimanapun</h1>
                    <p className="resp">Evomo membantu Anda mengetahui <br/>kondisi lingkungan dengan terhubung ke <br/>internet dan notifikasi disaat darurat.</p>
                </Col>
                <Col md={{span:6, order:12}} >
                    <img src= {image1} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"/>
                </Col>                
            </Row>  
            </Container>

            
        </div>
    )
}

export default FiturSectionOne

