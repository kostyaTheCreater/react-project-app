import React, {useState, useEffect} from "react";
import { Navbar, Nav, Button, Container, Modal, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link{
        color: #adb1b8;
        &:hover{
            color: white
        }
    }
`;

export default function NaviBar(){

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);

    function handleChange(e){
        let target = e.target;

        switch(target.id){
            case 'email':
                setEmail(target.value);
                break;
            case 'password':
                setPassword(target.value);
                break;
        }
    }

    function logIn(event){
        event.preventDefault();

        let user = JSON.stringify({
            email: email,
            password: password
        });

        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: user
        })
        .then((res) => res.json())
        .then((res) => {setData(res.message || res.token); console.log(res)});

        setShow(false);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Styles>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand className="ms-3">beingHuman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/notes'>Notes</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="light" className="me-2" onClick={handleShow}>Log In</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* <p>{!data ? "Loading" : data}</p> */}
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control value={email} 
                                id='email'
                                type="email" 
                                placeholder="Email"
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} 
                                id='password'
                                type="password" 
                                placeholder="Password"
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label='Remember me'/>
                        </Form.Group>
                    </Form>
                    <div className="d-grid gap-2">
                        <Button variant="primary" 
                            size='lg' 
                            style={{marginTop: "10px"}}
                            onClick={logIn}
                        >Log</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}