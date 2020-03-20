import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/global.css'
import image1 from "../images/s3.svg"
import image2 from "../images/s4.svg"
import image3 from "../images/s5.svg"

const SectionThree = () =>{
    
    return(

    <Container className="partition">        
            {/* ROW 1 */}
            <Row className="justify-content-md-center mb3">
                <Col className="cont3" md={{ span: 5, offset: 1, order: 1 }} sm={6} xs={{ span: 6, order: 12}} large={6}>
                    <h1 className="head1">Ketahui sekarang, <br/>bukan nanti</h1>
                    <p className="resp">
                    Udara terlalu lembab? Listrik tidak stabil? atau pH air tidak sesuai? Evomo menginformasikan kondisi secara <b>realtime</b> apapun yang sedang terjadi dengan cepat.                </p>
                
                </Col>
                <Col md={{ span: 6, order: 12}}>
                    <img src= {image1} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                    />
                </Col>
            </Row>  
            
            {/* ROW 2 */}
            <Row className="justify-content-md-center mb3">
                <Col md={5} large={6}>
                    <img src= {image2} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                    />
                </Col>
                <Col className="cont3" md={{ span: 4, offset: 1 }} sm={6} xs={6}>
                    <h1 className="head1">Data yang tepat dan akurat</h1>
                    <p className="resp">Data adalah yang terpenting untuk Anda. Evomo menampilkan informasi yang <b>valid</b> dan bernilai yang Anda butuhkan.</p>
                </Col>             
            </Row>

            {/* ROW 3 */}
            <Row className="justify-content-md-center mb3">
                <Col className="cont3" md={{ span: 5, offset: 1, order: 1 }} sm={6} xs={{ span: 6, order: 12}} large={6}>
                    <h1 className="head1">Bawa data Anda ke level selanjutnya</h1>
                    <p className="resp">
                    Mendapatkan pemahaman yang lebih dalam <br/>dengan adanya analisis dan metriks sebagai <b>sistem pendukung keputusan</b> Anda.</p>
                
                </Col>
                <Col md={{ span: 6, order: 12}}>
                    <img src= {image3} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                    />
                </Col>
            </Row>  
        </Container>
    )
}

export default SectionThree

