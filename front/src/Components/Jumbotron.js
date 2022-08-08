import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .jumbotron{
        background: #d1eef0;
        color: black;
        height: 400px;
        position: relative;
    }
`

const Jumbotron = () => (
    <Styles>
        <div className="jumbotron container-fluid" style={{
            paddingTop: '5%'
            }}>
            <Container>
                <h1>Human development</h1>
                <p>Development of the human body is the process of growth to maturity. 
                The process begins with fertilization, where an egg released from the ovary
                 of a female is penetrated by a sperm cell from a male. The resulting zygote 
                 develops through mitosis and cell differentiation, and the resulting embryo 
                 then implants in the uterus, where the embryo continues development through 
                 a fetal stage until birth. Further growth and development continues after birth, 
                 and includes both physical and psychological development, influenced by genetic, 
                 hormonal, environmental and other factors. This continues throughout life: through 
                 childhood and adolescence into adulthood. 
                </p>
                <p>Human organs and organ systems develop in a process known as organogenesis. 
                    This begins in the third week of embryonic development, when the gastrula
                    forms three distinct germ layers, the ectoderm, mesoderm and endoderm. 
                    The ectoderm will eventually develop into the outer layer of skin and nervous system.
                    The mesoderm will form skeletal muscles, blood cells, the reproductive system, 
                    the urinary system, most of the circulatory system, and the connective tissue of the torso.
                    The endoderm will develop into the epithelium of the respiratory and gastrointestinal tracts
                    and several glands.
                </p>
            </Container>
        </div>
    </Styles>
)

export default Jumbotron;