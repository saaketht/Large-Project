/*import React, {useState, useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Modal, Form, FloatingLabel, Container, Row, Col, Button} from 'react-bootstrap';
import StaticRegisterModal from './StaticRegisterModal';


const StaticLoginModal = (props) =>
{
    const [show, setShowLogin] = useState(false);

    return(
        <>
            < Modal show={props.show} backdrop="static" keyboard={false} 
                size="lg" aria-labelledby="contained-modal-title-vcenter" centered={true}
                cancel={props.close}>
                <Modal.Header>
                <Modal.Title> Please log in </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container fluid>
                    <Form>
                        <Row>
                        <Form.Group className="loginRegistrationForm" controlId="loginForm.username1">
                            <FloatingLabel controlId="usernameLabel" label="Username" className="loginRegistrationLabel">
                            <Form.Control 
                            type="text" inputMode="text" placeholder="myUsername123" id="loginModalUsernameField" 
                            />
                            </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="loginRegistrationForm" controlId="loginForm.password1">
                            <FloatingLabel controlId="passwordLabel" label="Password" className="loginRegistrationLabel">
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
                    <Button onClick={props.close}>Cancel</Button>
                </Modal.Footer>
            </ Modal>
        </>
    );
}


export default StaticLoginModal;*/