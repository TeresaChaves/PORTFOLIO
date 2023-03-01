import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Modal } from 'react-bootstrap';
import './ProjectsCards.css'
import navIcon2 from '../../assets/img/icons8-github.svg'
import ModalProjects from '../Modal/Modal'
import { useState } from "react"

function ProjectCard({ title, description, imgUrl, url, git, detail }) {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)



    return (




        <div class="card" style={{ width: '18rem' }}>
            <div class="card-details">
                <img className="imgcard" src={imgUrl} alt="image" />
                <p class="text-title">{title}</p>
                <p class="text-body">{description}</p>
            </div>
            <Row>

                {/* <div className="social-icon">
                    <a href="https://github.com/TeresaChaves"><img src={navIcon2} alt="github" /></a>
                </div> */}

                <div>
                    <a href={git}>
                        <button className="button2" >
                            <span> Code</span>
                        </button>
                    </a>
                    {url ?
                        <span>
                            <a href={url}>
                                <button className="button2" >
                                    <span>Web</span>
                                </button>
                            </a>
                            <a>
                                <button className="button3" onClick={openModal}>
                                    <span>Detalles</span>
                                </button>
                                <Col>
                                    <Modal show={showModal} onHide={closeModal} >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Detalles de {title}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>{description}</p>
                                            <p>{detail}</p>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                            </a>

                        </span>

                        :
                        <a >

                            <button className="button2" onClick={openModal}>+</button>
                            <Col>
                                <Modal show={showModal} onHide={closeModal} >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Detalles de {title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>{description}</p>
                                        <p>{detail}</p>
                                    </Modal.Body>
                                </Modal>
                            </Col>


                        </a>

                    }
                </div>

            </Row>
        </div>



    );
}

export default ProjectCard;