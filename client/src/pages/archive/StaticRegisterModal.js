/*import React, {useState, useEffect} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Modal, Container, Row, Col, Button, Form, FloatingLabel} from "react-bootstrap";
import StaticLoginModal from "./StaticLoginModal";


const StaticRegisterModal = (props) =>
{
    const [show, setShowReg] = useState(false);

    return(
        <>
            < Modal show={props.show} onBackdropClick={props.close} keyboard={false} 
                size="lg" aria-labelledby="contained-modal-title-vcenter" centered={true}
                cancel={props.close}>
                <Modal.Header>
                <Modal.Title> Register </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Form>
                            <Row>
                            <Form.Group className="loginRegistrationForm" controlId="registrationForm.username1">
                                <FloatingLabel controlId="usernameLabel" label="Username" className="loginRegistrationLabel">
                                <Form.Control 
                                type="text" inputMode="text" placeholder="myUsername123" id="registrationModalUsernameField" 
                                />
                                </FloatingLabel>
                            </Form.Group>
                            </Row>
                            <Row>
                            <Form.Group className="loginRegistrationForm" controlId="registrationForm.password1">
                                <FloatingLabel controlId="passwordLabel" label="Password" className="loginRegistrationLabel">
                                <Form.Control 
                                type="password" inputMode="text" placeholder="Password" id="registrationModalPasswordField" 
                                />
                                </FloatingLabel>
                            </Form.Group>
                            </Row>
                            <Row>
                            <Form.Group>
                                <FloatingLabel controlId="emailLabel" label="Email" className="loginRegistrationLabel">
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
                    <Button onClick={props.close}>Cancel</Button>
                </Modal.Footer>
            </ Modal>
        </>
    );
}


export default StaticRegisterModal;*/