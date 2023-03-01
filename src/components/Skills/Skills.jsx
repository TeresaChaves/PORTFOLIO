import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react from "../../assets/img/react-2.svg"
import javascript from "../../assets/img/logo-javascript.svg"
import node from "../../assets/img/nodejs-2.svg"
import typescript from "../../assets/img/typescript.svg"
import html from "../../assets/img/html-1.svg"
import css from "../../assets/img/css-3.svg"
import mongo from "../../assets/img/mongodb-icon-1.svg"


import colorSharp from "../../assets/img/color-sharp.png"
import './Skills.css'




function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 200, min: 0 },
            items: 3
        }
    };



    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p></p>
                            <p>Después de un año formandome de manera autodidacta
                                decidí terminar mi formación en una de las mejores escuelas y más exigentes
                                a nivel nacional, IRONHACK.
                            </p>
                            <p>HTML || CSS || Nodejs || Express || Reactjs || Typescript || Javascript || MongoDB || Socket.io</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="Image2" />
                                    <h5>NodeJs</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image3" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="Image4" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image5" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image6" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={mongo} alt="Image6" />
                                    <h5>MongoDB</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>

    )
}


export default Skills