import { Row, Col, Modal } from "react-bootstrap";
import "./ProjectsCards.css";
import { useState } from "react";

function ProjectCard({ title, description, imgUrl, url, git, detail, figma }) {
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
              <p className="name-tec">Tecnologías:</p>
              <div
                className="text-body"
                style={{ marginBottom: "1rem", whiteSpace: "pre-line" }}>
                {/* Si la descripción contiene saltos de línea o HTML, se renderiza correctamente */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: description.replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container-title">
              <p class="text-title-porject">{title}</p>
            </div>
            <hr />
            <div className="descrition-container">
              <p className="name-tec">Tecnologías:</p>
              <div
                className="text-body"
                style={{ marginBottom: "1rem", whiteSpace: "pre-line" }}>
                {/* Si la descripción contiene saltos de línea o HTML, se renderiza correctamente */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: description.replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <Row>
        <div>
          <div className="container-button">
            {figma ? (
              <a href={figma} target="_blank">
                <button className="button2">
                  <span>Figma</span>
                </button>
              </a>
            ) : (
              <a href={git}>
                <button className="button2">
                  <span>Code</span>
                </button>
              </a>
            )}

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
                    <div className="description-modal">{description}</div>
                    <div
                      className="detail-modal"
                      dangerouslySetInnerHTML={{ __html: detail }}
                      style={{
                        fontSize: "1rem",
                        color: "white",
                        borderRadius: "10px",
                        padding: "1rem",
                        marginTop: "1rem",
                      }}
                    />
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
