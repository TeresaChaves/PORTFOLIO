import { Card, Button, Container, Row, Col } from 'react-bootstrap'
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




function Projects() {

    const [model, setModel] = useState(false)
    const projects = [
        {
            title: "TimeShare",
            description: " React || Nodejs || Mongodb || Javascript || Cloudinary || HTML || CSS ",
            imgUrl: projImg1,
        },
        {
            title: "Geofilm",
            description: "Express || API IMDB Google Maps || Javascript || HTML || CSS   ",
            imgUrl: projImg2,
        },
        {
            title: "Eternal Joaquin",
            description: "Javascript || CanvasRenderingContext2D || || HTML || CSS  ",
            imgUrl: projImg3,
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
                <Row>
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
                </Row>
                <Row>
                    <Col>

                        <h2 style={{ textAlign: 'center' }}>Web Demo</h2>
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
            </Container>

        </section>


    )


}

export default Projects