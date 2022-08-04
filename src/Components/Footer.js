import React from 'react';
import { Container } from 'react-bootstrap';


const Footer = () => (
   <Container fluid className='mt-auto' style={{backgroundColor: '#212529', color: '#fff' }}>
        <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <p>Healthy blog</p>
        </Container>
    </Container>
)

export default Footer;