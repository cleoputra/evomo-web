import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/global.css'
import image1 from "../images/s3.svg"
import image2 from "../images/s4.svg"
import image3 from "../images/s5.svg"

const SectionThree = () =>{
    
    return(

    <Container>        
            {/* ROW 1 */}
            <Row className="justify-content-md-center">
                <Col md={{ span: 5, offset: 1 }}>
                    <h1>Ketahui sekarang, <br/>bukan nanti</h1>
                    <p>
                    Udara terlalu lembab? Listrik tidak stabil? atau pH air tidak sesuai? Evomo menginformasikan kondisi secara <b>realtime</b> apapun yang sedang terjadi dengan cepat.                </p>
                
                </Col>
                <Col md={6}>
                    <img src= {image1} width={500} height={372} className="ml-3" alt="Generic placeholder"
                    />
                </Col>
            </Row>  

            <br/><br/><br/><br/><br/>
            
            {/* ROW 2 */}
            <Row className="justify-content-md-center">
                <Col md={5}>
                    <img src= {image2} width={500} height={372} className="ml-3" alt="Generic placeholder"
                    />
                </Col>
                <Col md={{ span: 4, offset: 1 }}>
                    <h1>Data yang tepat dan akurat</h1>
                    <p>Data adalah yang terpenting untuk Anda. Evomo menampilkan informasi yang <b>valid</b> dan bernilai yang Anda butuhkan.</p>
                </Col>             
            </Row>

            <br/><br/><br/><br/><br/>
            {/* ROW 3 */}

            <Row className="justify-content-md-center">
                <Col md={{ span: 5, offset: 1 }}>
                    <h1>Bawa data Anda ke level selanjutnya</h1>
                    <p>
                    Mendapatkan pemahaman yang lebih dalam <br/>dengan adanya analisis dan metriks sebagai <b>sistem pendukung keputusan</b> Anda.</p>
                
                </Col>
                <Col md={6}>
                    <img src= {image3} width={500} height={372} className="ml-3" alt="Generic placeholder"
                    />
                </Col>
            </Row>  
        </Container>
    )
}

export default SectionThree

