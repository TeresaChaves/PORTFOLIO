import { Col, Container, Row } from "react-bootstrap";
import { Phone } from "react-bootstrap-icons";
import { Tv } from "react-bootstrap-icons";

import LottieComp from "../Lottie/Lottie";
// import headerImg from "../../assets/img/header-img.svg"
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.css";
import { Modal } from "react-bootstrap";
import mail from "../../assets/img/ggg.png";
import cv from "../../assets/img/cv.png";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Javascript",
    "React",
    "APIs",
    "SASS",
    "Node",
    "Figma",
    "CSS",
    "HTML",
    "Git",
    "MongoDB",
    "Swagger",
    "Express",
    "Boostrap",
  ];

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleShow2 = () => setShowModal2(true);
  const handleClose2 = () => setShowModal2(false);

  const handleShow = () => {
    setShowModal(true);
    setModalOpen(true);
    document.body.setAttribute("aria-hidden", "true");
    document.body.classList.add("dark-background");
  };
  const handleClose = () => {
    setShowModal(false);
    setModalOpen(false);
    document.body.removeAttribute("aria-hidden");
    document.body.classList.remove("dark-background");
  };

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container className="f1">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h1 className="tagline">Teresa Chaves Maza</h1>
                  <p>{` Web Developer`}</p>{" "}
                  <p className="cargo">{` Frontend / UX-UI`}</p>{" "}
                  <h3 className="rotate-skills">
                    {" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Full Stack", "Frontend", "Backend" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h3>
                  {/* <p>
                    ¿Quieres que la persona más simpática de Madrid trabaje en
                    tu empresa? 💩
                  </p> */}
                  <p>
                    {" "}
                    Frontend developer con más de <b>tres años</b> de
                    experiencia en el sector tecnológico.
                  </p>
                  <p className="despcription-banner">
                    Me gusta aprender más que comer coquinas en Huelva. Tengo la
                    Licenciatura de trabajar en equipo haciéndote sentir a gusto
                    y sacando lo mejor de todos, el Postgrado en trabajar bajo
                    presión dando lo mejor de mí y el Doctorado en que se me
                    ocurran las ideas más locas con las bases más sólidas.{" "}
                  </p>
                  <p className="despcription-banner">
                    Pero también tengo carreras un poco más homologadas.{" "}
                    {/* <a href="https://drive.google.com/drive/u/0/folders/1Wf-Cs5tol11Nt0UqwIXzi3Jr_r1UD_0E"> */}
                    <div className="botones-experiencia">
                      <button className="button3" onClick={handleShow}>
                        Formación Académica
                      </button>
                      <Modal
                        show={showModal}
                        onHide={handleClose}
                        backdropClassName="dark-background"
                        aria-modal="true"
                        aria-hidden={!modalOpen}>
                        <Modal.Header closeButton>
                          <Modal.Title>Formación académica</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="fecha-trabajo2">
                            <span className="span-name">
                              Full Stack Web Developer{" "}
                            </span>
                            <span>2021</span>
                          </div>
                          <p>IRONHACK</p>
                          <div className="fecha-trabajo2">
                            <span className="span-name">
                              Postgrado en Postproducción y Edición de Cine
                            </span>
                            <span>2008</span>
                          </div>
                          <p>Escuela TAI</p>
                          <div className="fecha-trabajo2">
                            <span className="span-name">
                              Realización de Audiovisuales y Espectáculos
                            </span>
                            <span>2003</span>
                          </div>
                          <p>ESAMA</p>
                          <div className="fecha-trabajo2">
                            <span className="span-name">
                              Diplomatura en Trabajo Social
                            </span>
                            <span>2000</span>
                          </div>
                          <p>UNIVERSIDAD PABLO DE OLAVIDE</p>
                        </Modal.Body>
                      </Modal>
                      <button className="button3" onClick={handleShow2}>
                        EXPERIENCIA PROFESIONAL
                      </button>
                      <Modal show={showModal2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                          <Modal.Title>Experiencia Profesional</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="fecha-trabajo">
                            <span className="span-name">CALIMACO</span>
                            <span>2024 / 2025</span>
                          </div>
                          <p className="description-job">
                            <ul>
                              <li>
                                Desarrollo y mantenimiento de aplicaciones web
                                con <b>React, Node.js y Express.</b>
                              </li>
                              <li>
                                Gestión de bases de datos <b>SQL</b>, incluyendo
                                creación de tablas, procedimientos almacenados y
                                optimización de consultas.
                              </li>
                              <li>
                                Creación de <b>APIs RESTful</b> con Express,
                              </li>
                              <li>
                                Implementación de mejoras en el{" "}
                                <b>backoffice</b> según los requerimientos de
                                cliente.
                              </li>

                              <li>
                                Compilación y despliegue automatizado con{" "}
                                <b>Argo CD </b>, optimizando la entrega continua
                                (CI/CD).
                              </li>
                              <li>
                                Revisión de código para garantizar buenas
                                prácticas, optimización y cumplimiento de
                                estándares. <b> Clean code</b> .
                              </li>
                              <li>
                                Gestión de tareas con <b> Jira</b> siguiendo un
                                flujo ágil.
                              </li>
                              <li>
                                Uso de la librería <b>MUI </b> para diseñar
                                interfaces modernas, accesibles y
                                personalizadas, mejorando la experiencia del
                                usuario.
                              </li>
                            </ul>
                          </p>
                          <br />
                          <div className="fecha-trabajo">
                            <span className="span-name">OSOIGO NEXT</span>
                            <span>2023 / 2024</span>
                          </div>
                          <p className="description-job">
                            <ul>
                              <li>
                                Desarrollo del Frontend de una plataforma de
                                participación ciudadana para una televisión
                                nacional.
                              </li>
                              <li>
                                Implementación de foros, videoencuentros,
                                encuestas y votaciones.
                              </li>
                              <li>
                                Creación de interfaces responsivas y accesibles
                                con HTML5 y SASS.
                              </li>
                              <li>
                                Desarrollo de aplicaciones en React con
                                componentes modulares y reutilizables.
                              </li>
                              <li>
                                Gestión del estado con React Hooks y React
                                Query.
                              </li>
                              <li>
                                Uso de WebSockets para videoencuentros en tiempo
                                real.
                              </li>
                              <li>
                                Optimización del rendimiento con lazy loading y
                                code splitting.
                              </li>
                              <li>
                                Pruebas unitarias e integración para asegurar la
                                calidad del código.
                              </li>
                              <li>
                                Consumo e integración de APIs RESTful para
                                gestión de datos asíncronos.
                              </li>
                              <li>
                                Uso de arquitectura basada en componentes y
                                gestión del estado con React Query.
                              </li>
                            </ul>
                          </p>
                          <br />
                          <div className="fecha-trabajo">
                            <span className="span-name">
                              PORTFOLIO/ESCENÓGRAFO
                            </span>
                            <span>2024</span>
                          </div>
                          <p className="description-job">
                            Diseño y desarrollo en React y Figma del portfolio
                            de Pablo Chaves, nominado a los Premios Max. Este
                            proyecto representa la fusión de arte escénico e
                            innovación tecnológica. La nominación de Pablo
                            Chaves destaca el impacto visual y técnico de
                            nuestra colaboración.
                          </p>
                          <br />
                          <div className="fecha-trabajo">
                            <span className="span-name">CREDITSONG</span>
                            <span>2022</span>
                          </div>
                          <p className="description-job">
                            Diseño y el frontend en React, conectando a la
                            perfección los derechos de autor de las canciones
                            con la blockchain. Participando de este viaje
                            innovador en la intersección de la música y la
                            tecnología. 🚀🎶
                            <br />
                            <br />
                          </p>
                          <div className="fecha-trabajo">
                            <span className="span-name">FREELANCE</span>
                            <span>2021</span>
                          </div>
                          <p className="description-job">
                            <span className="name-secoundary">TimeShare</span>{" "}
                            Desarrollo de una app que digitaliza los servicios
                            de un banco de tiempo, utilizando las horas del
                            usuario como moneda de cambio.
                            <span className="name-secoundary">
                              {" "}
                              GeoFilm
                            </span>{" "}
                            Desarrollo de una app conectada con la api de google
                            maps y la api de imbd para crear tu propia base de
                            datos con las localizaciones de tus películas
                            favoritas.
                          </p>
                        </Modal.Body>
                      </Modal>
                    </div>
                    {/* </a> */}
                  </p>
                  {/* <p>
                    Soy tan valiente que he puesto el icono de la caca en mi
                    portfolio.
                  </p> */}
                  <div className="botones-experiencia">
                    <a
                      href="https://vimeo.com/manage/videos/580786976"
                      target="_blank">
                      <button>
                        <Tv size={28} />
                        Reel Grafismo y Edición
                      </button>
                    </a>
                    <button>
                      <Phone size={28} />
                      600700231
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }>
                  <LottieComp className="cambiar-color"></LottieComp>
                </div>
              )}
            </TrackVisibility>

            {/* <span className="tagline">
                            Bienvenid@ a mi Porfolio
                        </span>
                        <h1>{`Soy Web Developer`} <span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus est eveniet atque, dolore aliquid inventore eum enim sed laborum aspernatur asperiores veritatis officiis impedit, obcaecati corrupti, blanditiis nulla possimus.
                        </p>
                        <button onClick={() => console.log('conect')}>Conecta<ArrowRightCircle size={25}></ArrowRightCircle></button> */}
            {/* </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt="Header"></img> */}
            {/* <LottieComp></LottieComp> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Banner;
