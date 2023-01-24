import { Card, Button, Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import './Projects.css'
import ProjectCard from '../../components/ProjectsCard/ProjectCard.jsx'
import projImg1 from '../../assets/img/timeshareok.png'
import projImg2 from '../../assets/img/geofilm.png'
import projImg3 from '../../assets/img/eternalok.png'
import timeshare from '../../assets/animations/timesharelinkedin.mp4'
import geofilm from '../../assets/animations/geofilm.mp4'
import joaquin from '../../assets/animations/Joaquinok.mp4'
import { DefaultPlayer as Video } from 'react-html5video/dist'
import 'react-html5video/dist/styles.css'
import { Fullscreen } from 'react-bootstrap-icons'
import React, { useState, createRef } from 'react'
import TrackVisibility from 'react-on-screen'
import colorSharp2 from '../../assets/img/color-sharp2.png'




function Projects() {

    const [model, setModel] = useState(false)
    const projects = [
        {
            title: "TimeShare",
            description: " React || Nodejs || Mongodb || Javascript || Cloudinary || HTML || CSS ",
            imgUrl: projImg1,
            url: "https://timeshare.netlify.app/",
            git: "https://github.com/TeresaChaves/BDT-client"
        },
        {
            title: "Geofilm",
            description: "Express || API IMDB Google Maps || Javascript || HTML || CSS ",
            imgUrl: projImg2,
            url: "https://geofilm.fly.dev/",
            git: "https://github.com/gonzalodeveloper/geofilm"
        },
        {
            title: "Eternal Joaquin",
            description: "Javascript || CanvasRenderingContext2D || || HTML || CSS  ",
            imgUrl: projImg3,
            url: "https://teresachaves.github.io/Zombie_Runner/",
            git: "https://github.com/TeresaChaves/Zombie_Runner"
        },


    ];

    let videos = [
        {
            id: 1,
            poster: projImg1,
            videoUri: timeshare
        },
        {
            id: 2,
            poster: projImg2,
            videoUri: geofilm
        },
        {
            id: 3,
            poster: projImg3,
            videoUri: joaquin
        }

    ]



    return (
        <section className="project" id="project">
            <Container>
                {/* <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus doloribus ab suscipit, repellendus consectetur ipsa aliquid cumque molestias nam rem? Excepturi aut recusandae vitae reprehenderit perferendis amet accusamus esse voluptatum?</p>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row> */}
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p className="pp">Y estos son los culpables de que me haya enamorado del Desarrollo Web. Cada uno de ellos me ha enseñado algo,
                                        a intentar crear un mundo más colaborativo, a rendir tributo al mejor jugador del planeta, a unir mis dos pasiones, el cine y la programación
                                        y todo gracias al código. ¿A quién no le va a gustar? </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav> */}
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            {/* <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane> */}
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>

                <section>
                    <Row>
                        <Col>
                            <h2 className='texwebdemo' style={{ textAlign: 'center' }}>Projects Demo</h2>
                            <div className="gallery">
                                {videos.map((item, index) => {
                                    let divRef = createRef(null)
                                    const openModel = () => {
                                        divRef.current.classList.remove('video')
                                        divRef.current.classList.add('model')
                                        setModel(true)

                                    }
                                    const closeModel = () => {
                                        divRef.current.classList.add('video')
                                        divRef.current.classList.remove('model')
                                        setModel(false)

                                    }

                                    return (
                                        <div ref={divRef} className='video' key={index}>
                                            {model && <button className='model-close-btn' onClick={() => closeModel()}>X</button>}
                                            <div className='video-container' onClick={() => openModel()}>
                                                <Video
                                                    style={{ width: '100%' }}
                                                    autoPlay={model}
                                                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                                    poster={item.poster}
                                                >
                                                    <source src={item.videoUri} type='video/webm' />
                                                </Video>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </section>

            </Container>
            <img className="background-image-right" src={colorSharp2}></img>

        </section>


    )


}

export default Projects