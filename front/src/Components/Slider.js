import React from "react";
import { Carousel } from "react-bootstrap";
import body from '../body.jpg';
import people from '../people.jpg';


export default function Slider(){
    return (
        <Carousel variant="dark">
            <Carousel.Item style={{'height': '700px'}}>
            <img
                className="d-block w-100"
                src={people}
                alt="Stages of human development from childhood to oldness"
            />
                <Carousel.Caption>
                    <h3>Stages of Human Development</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}}>
            <img
                className="d-block w-100"  //mx-auto
                src={body}
                alt="Two image of body structure"
            />
                <Carousel.Caption>
                    <h3>Body structure</h3>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    )
}