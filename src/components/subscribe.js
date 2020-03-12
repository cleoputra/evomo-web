import React from "react"
import {Container, Row, Col, Button} from 'react-bootstrap'
import '../styles/global.css'

const Subscribe = () =>{
    
    return(
        <Container className="bg-blue w-100 ">
          {/* ROW 1 */}
          <br/><br/><br/>
          <Row className="justify-content-md-center">
          <Col md={{ span: 5, offset: 1 }}>
            <h5 className="txt-subs white">Solusi Pantau Kondisi Lebih Mudah</h5>          
          </Col>

          <Col md={6}>
                <Button variant="outline-primary white ml25">
                    Coba Sekarang
                </Button>
          </Col>
        </Row>
        <br/><br/><br/>
        </Container>


    )
}

export default Subscribe

