import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react from "../../assets/img/icons8-react-400.png"
import javascript from "../../assets/img/icons8-javascript-144.png"
import node from "../../assets/img/icons8-nodejs-144.png"
import typescript from "../../assets/img/icons8-typescript-144.png"
import html from "../../assets/img/icons8-html-filetype-100.png"
import css from "../../assets/img/icons8-css3-100.png"
import colorSharp from "../../assets/img/color-sharp.png"
import './Skills.css'




function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 5
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
                            <p>Si has estado en Ironhack sabes lo que es aprender cualquiera de estos en menos de 2 semanas. Te da la seguridad de enfrentarte a la programación como un reto, te enseña a aprender como nunca lo has hecho.</p> <p>HTML || CSS || Nodejs || Express || Reactjs || Typescript || Javascript</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="Image" />
                                    <h5>NodeJs</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="Image" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
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