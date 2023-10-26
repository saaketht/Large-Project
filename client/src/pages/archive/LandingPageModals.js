/*import React, {useState} from "react";
import {Modal, Button, Form, Container, Row, Col, ModalDialog, ModalBody, FloatingLabel} from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LandingPageModals = () =>
{
    const [showChoice, setShowingOfChoiceModal] = useState(true);
    const [showLogin, setShowingOfLoginModal] = useState(false);
    const [showRegister, setShowingOfRegisterModal] = useState(false);

    return(
        //    Login Modal 
        <>
            < Modal modalShow={showLogin} backdrop="static" keyboard={false} 
                size="lg" aria-labelledby="contained-modal-title-vcenter" centered={true}
                className="loginModal">
                <Modal.Header>
                <Modal.Title> Please log in </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container fluid>
                    <Form>
                        <Row>
                        <Form.Group className="loginRegistrationForm" controlId="loginForm.username1">
                            <FloatingLabel controlId="usernameLabel" aria-label="Username" className="loginRegistrationLabel">
                            <Form.Control 
                            type="text" inputMode="text" placeholder="myUsername123" id="loginModalUsernameField" 
                            />
                            </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="loginRegistrationForm" controlId="loginForm.password1">
                            <FloatingLabel controlId="passwordLabel" aria-label="Password" className="loginRegistrationLabel">
                            <Form.Control 
                            type="password" inputMode="text" placeholder="Password" id="loginModalPasswordField" 
                            />
                            </FloatingLabel>
                        </Form.Group>
                        </Row>
                    </Form>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                        setShowingOfRegisterModal(true);
                        setShowingOfLoginModal(false);
                    }}> Register </Button>
                <Button variant="primary" onClick={alert("Login button pressed")}> Log in </Button>
                </Modal.Footer>
            </ Modal>

        //{ Register Modal }
        < Modal modalShow={showRegister} backdrop="static" keyboard={false} 
            size="lg" aria-labelledby="contained-modal-title-vcenter" centered={true}
            className="registerModal">
            <Modal.Header>
            <Modal.Title> Register </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Form>
                        <Row>
                        <Form.Group className="loginRegistrationForm" controlId="registrationForm.username1">
                            <FloatingLabel controlId="usernameLabel" aria-label="Username" className="loginRegistrationLabel">
                            <Form.Control 
                            type="text" inputMode="text" placeholder="myUsername123" id="registrationModalUsernameField" 
                            />
                            </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="loginRegistrationForm" controlId="registrationForm.password1">
                            <FloatingLabel controlId="passwordLabel" aria-label="Password" className="loginRegistrationLabel">
                            <Form.Control 
                            type="password" inputMode="text" placeholder="Password" id="registrationModalPasswordField" 
                            />
                            </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group>
                            <FloatingLabel>
                            <Form.Control 
                            type="text" inputMode="email" placeholder="myEmail@example.com" id ="registrationModalEmailField"
                            />
                            </FloatingLabel>
                        </Form.Group>
                        </Row>
                    </Form>
                </Container> 
            </Modal.Body>
            <Modal.Footer>
                <Container fluid>
                    <Col xs="auto">
                        <Button variant="secondary" onClick={() => {
                            setShowingOfLoginModal(true);
                            setShowingOfRegisterModal(false);
                        }}> Log In </Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" onClick={alert("Register pressed")}> Register with Current Info. </Button>
                    </Col>
                </Container>
            </Modal.Footer>
        </ Modal>
        
        //{/ Login/Register Choice Modal }
        < Modal modalShow={showChoice} backdrop="static" keyboard={false} 
            size="md" centered
            className="choiceModal" autoFocus>
            <Modal.Header centered>
            <Modal.Title color="white" centered>Please log in or register</Modal.Title>
            </Modal.Header>
            <Modal.Body centered>
            <Container fluid centered>
                <Row>
                    <Col>
                        <Button onClick={() => {
                            setShowingOfLoginModal(true);
                            setShowingOfChoiceModal(false);
                        }} variant="primary"> Log In </Button>  
                    </Col>
                    <Col>
                        <Button onClick={() => { 
                        setShowingOfRegisterModal(true);
                        setShowingOfChoiceModal(false);
                    }} variant="primary"> Register </Button>  
                    </Col>
                </Row>
            </Container>
            </Modal.Body>
        </ Modal>
    
    { Failure Modal/}
    <Modal show={true} onHide={() => {
        setShowingOfChoiceModal(false);
        setShowingOfLoginModal(false);
        setShowingOfRegisterModal(false);
    }}>
        <ModalDialog centered>
            <ModalBody color="red">
                Error: No Modal Loaded!
            </ModalBody>
        </ModalDialog>
    </Modal>
    </>
    );
}


export default LandingPageModals;*/