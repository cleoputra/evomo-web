import React, {useState} from "react"
import {Container, Row, Modal, Button, Col, Image, Form} from 'react-bootstrap'
import '../styles/global.css'
import head from "../images/s1.png"
import telkom from "../images/Logo Telkom.svg"
import sierra from "../images/Logo Sierad.svg"
import ibr from "../images/Logo IBR 1.svg"

//import video popup library
import ModalVideo from 'react-modal-video'

function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setVisibleModal(!visibleModal);
    document.getElementById("result").innerHTML = e.target.email.value;

    // $url = "https://api.jeager.io/login"
    // $request_headers = array(
    //   'content-type : application/x-www-form-urlencoded',
    //   'username: result',
    //   'auto: true',
    //   'clientname: Guest',
    // );
  };

  return (
    <>
      <Button variant="primary" onClick={() => setVisibleModal(!visibleModal)}>
        SUBSCRIBE
      </Button>
      <br />
      <span id="result" />

      <Modal show={visibleModal} onHide={() => setVisibleModal(!visibleModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Saya Mau Coba Sekarang!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Kirimkan e-mail Anda agar dapat langsung uji coba di aplikasi Evomo.
          </p>
          <Form id="subscribe_form" onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setVisibleModal(!visibleModal)}
          >
            Close
          </Button>
          <Button variant="primary" type="submit" form="subscribe_form">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



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
                    <App/>
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
