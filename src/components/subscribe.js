import React from "react"
import {Container, Row, Col, Button} from 'react-bootstrap'
import '../styles/global.css'

const Subscribe = () =>{
    
    return(
        <Container className="bg-blue w-100 ">
          {/* ROW 1 */}
          <Row className="justify-content-md-center section-pad-2">
          <Col md={{ span: 5, offset: 1 }}>
            <h5 className="txt-subs white">Solusi Pantau Kondisi Lebih Mudah</h5>          
          </Col>

          <Col md={6} sm={6}>
                <Button variant="outline-primary white mls25">
                    Free Trial
                </Button>
          </Col>
        </Row>
        </Container>


    )
}

export default Subscribe

