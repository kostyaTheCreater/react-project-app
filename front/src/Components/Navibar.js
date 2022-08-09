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
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setButton] = useState(false);
    const [isAuth, setStatus] = useState(false);

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

    function authHandler(e){
        e.preventDefault();

        let auth = isLogin ? '/auth/login' : '/auth/registration';
        const user = JSON.stringify({
            email: email,
            password: password
        });

        fetch(auth, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: user
        })
        .then((res) => res.json())
        .then((res) => {setData(res.message || res.token); res.status ? setStatus(true) : setStatus(false)});
        
        setShow(false)
    }

    const handleClose = () => {
        setShow(false)
    };

    const handleShow = (e) => {
        let target = e.target;

        if(target.id == 'logIn') setButton(true);
        else setButton(false);

        setShow(true)
    };

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
                            {
                            isAuth ? <Button variant='light' onClick={() => setStatus(!isAuth)}>Sign out</Button> : 
                            <div> 
                                <Button variant="light" id='logIn' className="me-2" onClick={handleShow}>Log In</Button>
                                <Button variant="light" id='signUp' className="me-2" onClick={handleShow}>Sign up</Button> 
                            </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            {/* <p>{!data ? 'loading...' : data}</p> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Authorized</Modal.Title>
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
                    </Form>
                
                    <div className="d-grid gap-2">
                        {isLogin ? <AuthorizedButton handleRequest={authHandler} name='Log in'/> :
                            <AuthorizedButton handleRequest={authHandler} name='Sign up'/>}
                    </div> 
                </Modal.Body>
            </Modal>
        </>
    )
}


function AuthorizedButton(props){
    return (
        <Button variant="primary" 
            size='lg' 
            style={{marginTop: "10px"}}
            onClick={props.handleRequest}>{props.name}</Button>
    )
}