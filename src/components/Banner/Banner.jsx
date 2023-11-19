import { Col, Container, Row } from "react-bootstrap";
import { Phone } from "react-bootstrap-icons";

import LottieComp from "../Lottie/Lottie";
// import headerImg from "../../assets/img/header-img.svg"
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.css";
import { Modal } from "react-bootstrap";
import cv from "../../assets/img/cv.png";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Frontend",
    "UX/UI",
    "Javascript",
    "React",
    "APIs",
    "SASS",
    "Node",
  ];

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleShow2 = () => setShowModal2(true);
  const handleClose2 = () => setShowModal2(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
                  }
                >
                  <span className="tagline">Teresa Chaves Maza</span>
                  <h1>{`Soy Web Developer`}</h1>{" "}
                  <h1>
                    {" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Full Stack", "Frontend", "Backend" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  {/* <p>
                    ¿Quieres que la persona más simpática de Madrid trabaje en
                    tu empresa? 💩
                  </p> */}
                  {/* <p>
                    {" "}
                    Después de 17 años de editora de televisión estudié en
                    Ironhack FullStack Web Developer y me puse a picar código y
                    no he conseguido parar.
                  </p> */}
                  <p>
                    Me gusta aprender más que comer coquinas en Huelva. Tengo la
                    Licenciatura de trabajar en equipo haciéndote sentir a gusto
                    y sacando lo mejor de todos, el Postgrado en trabajar bajo
                    presión dando lo mejor de mí y el Doctorado en que se me
                    ocurran las ideas más locas con las bases más sólidas.{" "}
                  </p>
                  <p>
                    Pero también tengo carreras un poco más homologadas{" "}
                    {/* <a href="https://drive.google.com/drive/u/0/folders/1Wf-Cs5tol11Nt0UqwIXzi3Jr_r1UD_0E"> */}
                    <div className="botones-experiencia">
                      <button className="button3" onClick={handleShow}>
                        CV
                      </button>
                      <Col>
                        <Modal show={showModal} onHide={handleClose}>
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
                      </Col>
                      <button className="button3" onClick={handleShow2}>
                        EXPERIENCIA PROFESIONAL
                      </button>
                      <Col>
                        <Modal show={showModal2} onHide={handleClose2}>
                          <Modal.Header closeButton>
                            <Modal.Title>Experiencia Profesional</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="fecha-trabajo">
                              <span className="span-name">OSOIGO NEXT</span>
                              <span>2023</span>
                            </div>
                            <p>
                              Desarrollo y diseño de los proyectos desarrollados
                              dentro de Osoigo, consultoría de participación
                              para la administración pública y empresas,
                              Implementación de la accesibilidad bajo criterios
                              WCAG. Frontend y diseño de la sección de
                              participaciones de la web de RTVE.
                            </p>
                            <br />
                            <div className="fecha-trabajo">
                              <span className="span-name">CREDITSONG</span>
                              <span>2022</span>
                            </div>
                            <p>
                              Desarrollo de todo el frontend, conexión con web3
                              api, maquetación y diseño.
                              <br />
                              <br />
                            </p>
                            <div className="fecha-trabajo">
                              <span className="span-name">FREELANCE</span>
                              <span>2021</span>
                            </div>
                            <p>
                              <span className="name-secoundary">TimeShare</span>{" "}
                              Desarrollo de una app que digitaliza los servicios
                              de un banco de tiempo, utilizando las horas del
                              usuario como moneda de cambio.
                              <span className="name-secoundary">
                                {" "}
                                GeoFilm
                              </span>{" "}
                              Desarrollo de una app conectada con la api de
                              google maps y la api de imbd para crear tu propia
                              base de datos con las localizaciones de tus
                              películas favoritas. Mongodb,
                            </p>
                          </Modal.Body>
                        </Modal>
                      </Col>
                    </div>
                    {/* </a> */}
                  </p>
                  {/* <p>
                    Soy tan valiente que he puesto el icono de la caca en mi
                    portfolio.
                  </p> */}
                  <button>
                    <Phone size={28} />
                    600700231{" "}
                  </button>
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
                  }
                >
                  <LottieComp></LottieComp>
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
