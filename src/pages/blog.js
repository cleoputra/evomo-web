import React from "react"
import "../styles/styles.scss"


import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap"
import Header from  "../components/header"
import Subscribe from  "../components/subscribe"
import Footer from "../components/footer"
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'


import blog1 from "../images/blog1.jpeg"
import blog2 from "../images/blog2.jpeg"
import blog3 from "../images/blog3.jpeg"
import blog4 from "../images/blog4.jpeg"
import blog5 from "../images/blog5.jpg"
import blog6 from "../images/blog6.png"

const CaraKerja = () => (
    <div>

    <Helmet>
        <link rel="icon" href={favicon} />
    </Helmet>
    
    <Header/>

    <div className="section-container">
        {/* section 1 */}
        <Container>
            <Row noGutters className="justify-content-center blog-mb" >
                <Col
                xl={{ span: 6, order: 1 }}
                lg={{ span: 6, order: 1 }}
                md={{ span: 6, order: 1 }}
                sm={{ span: 12, order: 12 }}
                xs={{ span: 12, order: 12 }}
                >
                </Col>
                <CardDeck>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog1} />
                        <Card.Body>
                        <Card.Title>Digital Transformasi dan Visualisasi Proses Produksi Pada Manufaktur</Card.Title>
                        </Card.Body>
                        <Card.Footer>   
                        <a href="https://medium.com/jeager-industrial-internet-of-things/digital-transformasi-dan-visualisasi-proses-produksi-pada-manufaktur-54c1a8032c3" target="blank"><Button variant="outline-primary">More Info</Button></a>
                        <small className="text-muted ">&nbsp; 26 Feb 2020</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog2} />
                        <Card.Body>
                        <Card.Title>Industri Indonesia Bidik 5,3% Capaian Pertumbuhan Tahun 2020</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://medium.com/jeager-industrial-internet-of-things/industri-indonesia-bidik-5-3-capaian-pertumbuhan-tahun-2020-7ca385011d32" target="blank"><Button variant="outline-primary">More Info</Button></a>
                        <small className="text-muted"> &nbsp; 17 Jan 2020</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog3} />
                        <Card.Body>
                        <Card.Title>Indonesia Sambut Era Society 5.0</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://medium.com/jeager-industrial-internet-of-things/indonesia-sambut-era-society-5-0-4696b328b35a" target="blank"><Button variant="outline-primary">More Info</Button></a>
                        <small className="text-muted ">&nbsp; 30 Dec 2019</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Row>

            <Row noGutters className="justify-content-center mb3">
                <Col
                xl={{ span: 6, order: 1 }}
                lg={{ span: 6, order: 1 }}
                md={{ span: 6, order: 1 }}
                sm={{ span: 12, order: 12 }}
                xs={{ span: 12, order: 12 }}
                >
                </Col>
                <CardDeck>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog4} />
                        <Card.Body>
                        <Card.Title>Menteri Perindustrian Pacu Produksi Manufaktur Dengan Transformasi Industri 4.0</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://medium.com/jeager-industrial-internet-of-things/menteri-perindustrian-pacu-produksi-manufaktur-dengan-transformasi-industri-4-0-c972688e174" target="blank"><Button variant="outline-primary">More Info</Button></a>
                        <small className="text-muted ">&nbsp; 13 Nov 2019</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog5} />
                        <Card.Body>
                        <Card.Title>KEMENPERIN pilih 5 Startup Terbaik di Semarak Festival IKM</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://medium.com/jeager-industrial-internet-of-things/kemenperin-pilih-5-startup-terbaik-di-semarak-festival-ikm-d0c6f8a863f2" target="blank"><Button variant="outline-primary">More Info</Button></a>
                        <small className="text-muted ">&nbsp; 21 Jan 2019</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={blog6} />
                        <Card.Body>
                        <Card.Title>Perkembangan Dunia Industry 4.0 Di Indonesia</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://medium.com/jeager-industrial-internet-of-things/perkembangan-dunia-industry-4-0-di-indonesia-1eae2bc22c45" target="blank"><Button variant="outline-primary">More Info</Button></a>
                        <small className="text-muted ">&nbsp; 28 Sep 2018</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Row>
        </Container>
    </div>


    <Subscribe/>
    <Footer/>
    </div>
)

export default CaraKerja
