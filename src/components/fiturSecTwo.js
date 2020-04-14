import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/global.css'

import image1 from "../images/f2a.png"
import image2 from "../images/f2b.png"
import image3 from "../images/f2c.png"
import image4 from "../images/f2d.png"
import image5 from "../images/f2e.png"

const FiturSectionTwo = () =>{

    return(
        <Container className="partition">        
        {/* ROW 1 */}
        <Row className="justify-content-md-center mb3">
            <Col className="cont3" md={{ span: 5, offset: 1, order: 1 }} sm={6} xs={{ span: 6, order: 12}} large={6}>
                <h1 className="head1"><i>Realtime Monitoring</i></h1>
                <p className="resp">Pantau kondisi dan kualitas energi di lingkungan<br/>Anda sesuai dengan apa yang terjadi di lapangan <br/>langsung dari perangkat Anda</p>
            
            </Col>
            <Col md={{ span: 6, order: 12}}>
                <img src= {image1} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                />
            </Col>
        </Row>  
        
        {/* ROW 2 */}
        <Row className="justify-content-md-center mb3">
            <Col md={5} large={6}>
                <img src= {image3} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                />
            </Col>
            <Col className="cont3" md={{ span: 4, offset: 1 }} sm={6} xs={6}>
                <h1 className="head1"><i>Custom</i> Indikator</h1>
                <p className="resp">Sesuaikan indikator dengan kebutuhan Anda dan bebas menentukan batas atas dan batas bawah dari setiap indikator.</p>
            </Col>             
        </Row>

        {/* ROW 3 */}
        <Row className="justify-content-md-center mb3">
            <Col className="cont3" md={{ span: 5, offset: 1, order: 1 }} sm={6} xs={{ span: 6, order: 12}} large={6}>
                <h1 className="head1">Notifikasi</h1>
                <p className="resp">
                Informasi langsung terkait anomali yang sedang terjadi pada indikator seperti <i>Danger</i>, <i>Warning</i>, maupun <i>Offline</i> sehingga Anda dapat mengambil tindakan dengan cepat.</p>
            </Col>
            <Col md={{ span: 6, order: 12}}>
                <img src= {image2} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                />
            </Col>
        </Row>  

           {/* ROW 4 */}
           <Row className="justify-content-md-center mb3">
            <Col md={5} large={6}>
                <img src= {image4} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                />
            </Col>
            <Col className="cont3" md={{ span: 4, offset: 1 }} sm={6} xs={6}>
                <h1 className="head1"><i>Data Analytic</i></h1>
                <p className="resp">Adanya data <i>insight</i> dan data lebih rinci yang memudahkan Anda melihat perkembangan<br/> dan mengambil keputusan.</p>
            </Col>             
        </Row>

        {/* ROW 5 */}
        <Row className="justify-content-md-center mb3">
            <Col className="cont3" md={{ span: 5, offset: 1, order: 1 }} sm={6} xs={{ span: 6, order: 12}} large={6}>
                <h1 className="head1"><i>On Cloud / On Premise</i></h1>
                <p className="resp">
                Akses Evomo dimanapun dan kapanpun dengan internet dari perangkat tanpa takut kehilangan informasi penting Anda.</p>
            </Col>
            <Col md={{ span: 6, order: 12}}>
                <img src= {image5} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                />
            </Col>
        </Row>  
    </Container>
    )
}

export default FiturSectionTwo

