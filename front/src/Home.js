import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from './Components/Slider';
import Footer  from './Components/Footer';
import organs from './organs.jpg';
import Jumbotron from './Components/Jumbotron';

function Home(){

    return(
        <>
            <Slider style={{paddingBottom: '2rem'}}/>
            <Jumbotron/>
            <Container style={{paddingTop: '2rem', marginBottom: '30px' }}>
                <Row>
                    <Col md={5}>
                        <img src={organs} height={400} className='ms-5'></img>
                    </Col>
                    <Col md={6}>
                        <h2>Organization of the body</h2>
                        <p>The cell is the basic living unit of the human body—indeed, of all organisms. The human body consists of trillions of cells, each capable of growth, metabolism, response to stimuli, and, with some exceptions, reproduction. Although there are some 200 different types of cells in the body, these can be grouped into four basic classes. These four basic cell types, together with their extracellular materials, form the fundamental tissues of the human body: epithelial tissues, which cover the body’s surface and line the internal organs, body cavities, and passageways;  muscle tissues, which are capable of contraction and form the body’s musculature; nerve tissues, which conduct electrical impulses and make up the nervous system; and connective tissues, which are composed of widely spaced cells and large amounts of intercellular matrix and which bind together various body structures. (Bone and blood are considered specialized connective tissues, in which the intercellular matrix is, respectively, hard and liquid.)</p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Home;