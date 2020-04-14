import React from "react"
import {Container, Row, Button, Col, Image} from 'react-bootstrap'
import '../styles/global.css'
import head from "../images/s1.png"
import telkom from "../images/Logo Telkom.svg"
import sierra from "../images/Logo Sierad.svg"
import ibr from "../images/Logo IBR 1.svg"

//import video popup library
import ModalVideo from 'react-modal-video'

class SectionOne extends React.Component {

    constructor () {
      super()
      this.state = {
        isOpen: false
      }
      this.openModal = this.openModal.bind(this)
    }
    
    openModal () {
      this.setState({isOpen: true})
    }

    render() {
        return(
        <Container className="partition mthead">
            <Row className="justify-content-md-center">
                <Col md={{ span: 5, offset: 1, order: 1 }} large={6} xs={{order: 12}}>
                    <h1 className="sb resp">Realtime Monitoring <br/>Jadi Lebih Mudah</h1>
                    <p className="resp">
                        Ketahui kualitas lingkungan Anda <br/>dengan integrasi antara sensor dan <br/>sistem secara otomatis
                    </p> 
                    <a href="https://wa.me/6282211776239"><Button className="b1" size="md">Free Trial</Button></a> <br className="show"></br>
                    <Image  className="i1" src={telkom}  />
                    <Image className="i1" src={sierra}  />
                    <Image className="i1" src={ibr}  />

                </Col>
                <Col md={{span:6, order:12}} >
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='_7MWdBbt5F4' onClose={() => this.setState({isOpen: false})} />
                    <Button variant="outline-light" onClick={this.openModal}><img class="i1-mob mob-resp" src= {head} width={500} height={372} className="mob-resp" alt="Generic placeholder"/></Button>
                </Col>                
            </Row>  
        </Container>
        )
    }
}

export default SectionOne

