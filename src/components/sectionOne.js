import React from "react"
import {Container, Row, Button, Col, Image} from 'react-bootstrap'
import '../styles/global.css'
import head from "../images/s1.png"
import ikan from "../images/Perikanan.svg"
import ternak from "../images/Peternakan.svg"
import tani from "../images/Pertanian.svg"
import gedung from "../images/Building.svg"
import publik from "../images/Public Area.svg"

const SectionOne = () =>{
    
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col md={{ span: 5, offset: 1 }}>
                    <h1>Realtime Monitoring <br/>Jadi Lebih Mudah</h1>
                    <p>
                        Ketahui kualitas lingkungan Anda <br/>dengan integrasi antara sensor dan <br/>sistem secara otomatis
                    </p>
                    <Button className="b1" size="md">Coba sekarang</Button><br/><br/><br/>
                    <Image src={ikan} width={50} height={50} />
                    <Image className="i1" src={ternak} width={50} height={50} />
                    <Image className="i1" src={tani} width={50} height={50} />
                    <Image className="i1" src={gedung} width={50} height={50} />
                    <Image className="i1" src={publik} width={50} height={50} />

                </Col>
                <Col md={6}>
                    <img src= {head} width={500} height={372} className="ml-3" alt="Generic placeholder"
                    />
                </Col>
                
            </Row>  
        </Container>

    )
}

export default SectionOne

