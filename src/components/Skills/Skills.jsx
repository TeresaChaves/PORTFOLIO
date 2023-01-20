import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react from "../../assets/img/icons8-react-400.png"

import javascript from "../../assets/img/icons8-javascript-144.png"
import node from "../../assets/img/icons8-nodejs-144.png"
import express from "../../assets/img/icons8-backend-development-96.png"
import typescript from "../../assets/img/icons8-typescript-144.png"
import mongo from "../../assets/img/icons8-mongodb-144.png"
import html from "../../assets/img/icons8-html-filetype-100.png"
import css from "../../assets/img/icons8-css3-100.png"


import colorSharp from "../../assets/img/color-sharp.png"
import './Skills.css'
import { Col, Row } from "react-bootstrap"




function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <section className="skills" id="skills">

            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et provident neque dolores temporibus ipsum in porro rerum veniam, quas voluptatum cupiditate pariatur explicabo voluptate. Doloribus minus est nulla sunt iste.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src={react} alt="image" />
                                    <h5>ReactJs</h5>
                                </div>
                                <div className='item'>
                                    <img src={node} alt="image" />
                                    <h5>NodeJs</h5>
                                </div>
                                <div className='item'>
                                    <img src={express} alt="image" />
                                    <h5>Express</h5>
                                </div>
                                <div className='item'>
                                    <img src={javascript} alt="image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className='item'>
                                    <img src={typescript} alt="image" />
                                    <h5>Typescript</h5>
                                </div>
                                <div className='item'>
                                    <img src={mongo} alt="image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className='item'>
                                    <img src={html} alt="image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={css} alt="image" />
                                    <h5>CSS</h5>
                                </div>


                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp}></img>


        </section>
    )
}


export default Skills