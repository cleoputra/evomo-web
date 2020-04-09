import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/global.css'
import image1 from "../images/ck1.svg"
import image2 from "../images/ck2.svg"
import image3 from "../images/ck3.svg"
import image4 from "../images/ck4.svg"

const FiturSectionOne = () =>{
    return(
        <div>
            <Container className="partition">
                <Row className="justify-content-md-center section-pad">
                    <Col md= {7} xs={6}>
                        <h1 className="sb center resp">Lihat bagaimana Evomo bekerja</h1>
                    </Col>            
                </Row>  
            </Container>

            <Container className="partition">
                <Row className="justify-content-md-center mb3"> 
                    <Col md= {5} xs={6}>
                    <img src= {image1} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"/>
                    <p className="center resp">Mengetahui bagaimana Evomo dapat<br/> membantu memudahkan pemantauan Anda</p>
                    </Col>            
                </Row>  
                <Row className="justify-content-md-center mb3">
                    <Col md= {5} xs={6}>
                    <img src= {image2} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"/>
                    <p className="center resp">Proses pemasangan sensor di lokasi yang <br/>telah disepakati</p>
                    </Col>            
                </Row>  
                <Row className="justify-content-md-center mb3">
                    <Col md= {5} xs={6}>
                    <img src= {image3} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"/>
                    <p className="center resp">Mendapatkan akses untuk masuk ke <br/>sistem Evomo</p>
                    </Col>            
                </Row>  
                <Row className="justify-content-md-center mb3">
                    <Col md= {5} xs={6}>
                    <img src= {image4} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"/>
                    <p className="center resp">Dapat memantau kondisi sekitar secara<br/><i> realtime</i> dari perangkat yang diinginkan</p>
                    </Col>            
                </Row>  
            </Container>
        </div>
    )
}

export default FiturSectionOne

