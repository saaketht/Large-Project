/*import React, {useState} from "react";
import {Card, Button, Form, Container, Row, Col, CardDialog, CardBody, FloatingLabel} from "react-bootstrap";
import StaticRegisterModal from "./StaticRegisterModal";
import StaticLoginModal from "./StaticLoginModal";

const StaticChoiceCard = () =>
{
    const [loginShow, setShowLogin] = useState(false);
    const [regShow, setShowReg] = useState(false);

    return(
        < Card backdrop="static" keyboard={false} size="md" centered className="choiceCard">
            <Card.Header centered>
            <Card.Title color="white" centered>Please log in or register</Card.Title>
            </Card.Header>
            <Card.Body centered>
            <Container fluid centered>
                <Row>
                    <Col>
                        <Button onClick={() => {
                            setShowLogin(true);
                        }} variant="primary"> Log In </Button> 
                        <StaticLoginModal show={loginShow} close={() => setShowLogin(false)}/> 
                    </Col>
                    <Col>
                        <Button onClick={() => { 
                        setShowReg(true);
                    }} variant="primary"> Register </Button>
                    <StaticRegisterModal show={regShow} close={() => setShowReg(false)}/>  
                    </Col>
                </Row>
            </Container>
            </Card.Body>
        </ Card>
    );
}

export default StaticChoiceCard;*/