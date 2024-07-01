import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Modal } from "react-bootstrap";
import "./ProjectsCards.css";
import navIcon2 from "../../assets/img/icons8-github.svg";
import ModalProjects from "../Modal/Modal";
import { useState } from "react";

function ProjectCard({ title, description, imgUrl, url, git, detail }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-details">
        <img className="imgcard" src={imgUrl} alt="image" />

        {url ? (
          <>
            <div className="container-title">
              <p class="text-title-porject">{title}</p>
              <a href={url} target="_blank">
                <button className="button4">
                  <span>Web</span>
                </button>
              </a>
            </div>
            <hr />

            <div className="descrition-container">
              <p className="name-tec">Tecnologias:</p>
              <p class="text-body">{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="container-title">
              <p class="text-title-porject">{title}</p>
            </div>
            <hr />
            <div className="descrition-container">
              <p className="name-tec">Tecnologias:</p>
              <p class="text-body">{description}</p>
            </div>
          </>
        )}
      </div>

      <Row>
        <div>
          <div className="container-button">
            <a href={git}>
              <button className="button2">
                <span>Code</span>
              </button>
            </a>
            <a>
              <button className="button2" onClick={openModal}>
                <span>Detalles</span>
              </button>
              <Col>
                <Modal show={showModal} onHide={closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Detalles de {title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p className="description-modal"> {description}</p>
                    <p className="detail-modal">{detail}</p>
                  </Modal.Body>
                </Modal>
              </Col>
            </a>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default ProjectCard;
