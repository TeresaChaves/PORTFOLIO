import { Card, Button, Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "./Projects.css";
import ProjectCard from "../../components/ProjectsCard/ProjectCard.jsx";
import projImg1 from "../../assets/img/timesharebn.jpeg";
import projImg2 from "../../assets/img/portadareel.jpeg";
import projImg3 from "../../assets/img/eternalok.png";
import projImg4 from "../../assets/img/calimaco.jpg";

import timeshare from "../../assets/animations/timesharelinkedin.mp4";
import geofilm from "../../assets/animations/reel.mp4";
import joaquin from "../../assets/animations/eternalconmarco.mp4";
import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";
import { Fullscreen } from "react-bootstrap-icons";
import React, { useState, createRef } from "react";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import messenger from "../../assets/img/saboraperucover.jpeg";
import rtve from "../../assets/img/rtve.jpeg";
import messegerVideo from "../../assets/animations/peru.mp4";
import creditsong from "../../assets/animations/lashurdes.mp4";
import jaulavideo from "../../assets/animations/jaulaHD.mp4";
import creditimage from "../../assets/img/lashurdes.jpeg";
import jaula from "../../assets/img/JAULA.jpeg";
import osoigo from "../../assets/img/OSOIGONUEVO.png";
import pablo from "../../assets/img/pablo.jpeg";
import rayo from "../../assets/img/cmd.svg";
import play from "../../assets/img/play2.svg";
import subr from "../../assets/img/subrayado.svg";
import trespuntos from "../../assets/img/ctrl.svg";
import pausa from "../../assets/img/pause.svg";
import cn from "../../pages/utils.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const [model, setModel] = useState(false);

  const projects = [
    {
      title: "RTVE Participa",
      url: "https://www.rtve.es/participa/es/",
      description: "React || Figma || Express ||  Node Javascript ||  Swagger",
      imgUrl: rtve,
      git: "https://github.com/TeresaChaves",
      detail: `<div class='detail-rtve'>
    <p><b>Desarrolladora Front-end y UX-UI de la plataforma de participación RTVE Participa.</b></p>
    <p>Me encargué tanto de la conceptualización y diseño de la interfaz como de la implementación lógica de las funcionalidades, asegurando una experiencia accesible, fluida y escalable.</p>
    <div class='detail-section'>
      <span class='detail-icon'></span>
      <b>La plataforma permite:</b>
      <ul class='detail-list'>
        <li>Proponer y apoyar iniciativas.</li>
        <li>Participar en encuestas y votaciones públicas.</li>
        <li>Comentar y debatir temas de actualidad.</li>
        <li>Suscribirse a contenidos de su interés.</li>
        <li>Acceso a su perfil y actividad histórica (propuestas, votos, comentarios).</li>
        <li>Acumular puntos mediante la participación y canjear esto por premios.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🛠️</span>
      <b>Mi rol abarcó tanto la parte de diseño como la implementación técnica:</b>
      <ul class='detail-list'>
        <li>Diseño completo de la interfaz con <b>Figma</b>.</li>
        <li>Desarrollo con <b>React</b> bajo una arquitectura escalable y modular.</li>
        <li>Comunicación con <b>APIs RESTful</b>.</li>
        <li>Manejo de estado y caché con <b>React Query</b>.</li>
        <li>Creación de custom hooks y uso de <b>useContext</b>.</li>
        <li>Estilos modulares con <b>SASS</b> y uso de HTML semántico.</li>
        <li>Aplicación de estándares de <b>accesibilidad web</b> y diseño 100% responsive.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🤝</span>
      <span>Colaboré estrechamente con el equipo backend (Node.js y Django), asegurando una integración eficiente y robusta entre frontend y servidor.</span>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🎨</span>
      <span>Cada componente visual fue diseñado desde cero, buscando ofrecer una experiencia intuitiva, clara e inclusiva, adaptada a diferentes dispositivos y tipos de usuario.</span>
    </div>
  </div>`,
    },
    {
      title: "OSOIGO",
      url: "https://www.osoigonext.com/",
      description:
        "React || Figma || Express || Django || Node Javascript || Python || Swagger",
      imgUrl: osoigo,
      git: "https://github.com/TeresaChaves",
      detail: `<div class='detail-osoigo'>
    <p><b>Desarrolladora Front-end y UX-UI en Osoigo.</b></p>
    <p>Creación y diseño de proyectos innovadores de participación ciudadana, con enfoque en accesibilidad y usabilidad.</p>
    <div class='detail-section'>
      <span class='detail-icon'>🗳️</span>
      <b>Funcionalidades principales:</b>
      <ul class='detail-list'>
        <li>Plataforma para iniciativas ciudadanas y debates públicos.</li>
        <li>Encuestas, votaciones y comentarios en tiempo real.</li>
        <li>Gestión de perfiles y actividad histórica.</li>
        <li>Integración con APIs y sistemas de notificaciones.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🛠️</span>
      <b>Mi rol:</b>
      <ul class='detail-list'>
        <li>Diseño UI/UX con <b>Figma</b>.</li>
        <li>Desarrollo con <b>React</b> y <b>Django</b>.</li>
        <li>Implementación de accesibilidad y responsive design.</li>
        <li>Conexión con APIs y backend robusto.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🤝</span>
      <span>Colaboración con equipos multidisciplinares para garantizar calidad y escalabilidad.</span>
    </div>
  </div>`,
    },
    {
      title: "Credit Song",
      url: "https://www.creditsong.com/",
      description:
        "Javascript || HTML || CSS || Reactjs || Boostrap || LottieWeb || Jquery || ContexAPI ",
      imgUrl: creditimage,
      git: "https://github.com/TeresaChaves/ClienteBlock/tree/master",
      detail: `<div class='detail-credit'>
    <p><b>Desarrollo y diseño de toda la parte del Frontend para CreditSong.</b></p>
    <p>Startup basada en blockchain para la industria musical, con sedes en Barcelona y Dubai.</p>
    <div class='detail-section'>
      <span class='detail-icon'>🎵</span>
      <b>Características:</b>
      <ul class='detail-list'>
        <li>Gestión de créditos musicales y derechos de autor.</li>
        <li>Interfaz animada con <b>LottieWeb</b> y <b>React</b>.</li>
        <li>Integración con APIs y pagos blockchain.</li>
        <li>Responsive design y experiencia de usuario optimizada.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🛠️</span>
      <b>Mi rol:</b>
      <ul class='detail-list'>
        <li>Diseño UI/UX desde cero.</li>
        <li>Desarrollo con <b>React</b>, <b>Bootstrap</b> y <b>Jquery</b>.</li>
        <li>Implementación de animaciones y custom hooks.</li>
      </ul>
    </div>
  </div>`,
    },
    {
      title: "Escenógrafo-Arquitectura",
      description:
        "React || Figma || CSS || Node || Javascript || Sass || HTML ",
      imgUrl: pablo,
      url: "https://www.pablochaves.com/",

      figma:
        "https://www.figma.com/design/WfshEebQHhNB0xxb1ANE4c/Pablo-Chaves-Escen%C3%B3grafo?node-id=0-1&node-type=canvas&t=VP6bFBJ4tRgCXmBR-0",
      detail: `<div class='detail-pablo'>
    <p><b>Desarrolladora Front-end y UX-UI del portfolio de Pablo Chaves.</b></p>
    <p>Portfolio para escenógrafo nominado a los premios MAX, con diseño y desarrollo personalizado.</p>
    <div class='detail-section'>
      <span class='detail-icon'>🎭</span>
      <b>Características:</b>
      <ul class='detail-list'>
        <li>Diseño visual único y adaptado al cliente.</li>
        <li>Responsive design y animaciones CSS.</li>
        <li>Integración con <b>Figma</b> y <b>React</b>.</li>
        <li>Gestión de contenido y portfolio multimedia.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🛠️</span>
      <b>Mi rol:</b>
      <ul class='detail-list'>
        <li>Diseño UI/UX y desarrollo técnico.</li>
        <li>Implementación de estilos con <b>SASS</b> y HTML semántico.</li>
      </ul>
    </div>
  </div>`,
    },
  ];

  const projets2 = [
    {
      title: "Calimaco",
      description: "React || Nodejs || SQL || Javascript || HTML || MUI || CSS",
      imgUrl: projImg4,
      url: "https://www.calimaco.com/",
      detail: `<div class='detail-calimaco'>
    <p><b>Desarrolladora Fullstack en Calimaco.</b></p>
    <p>Desarrollo y mantenimiento de aplicaciones web con <b>React</b>, <b>Node.js</b>, <b>Express</b> y <b>SQL</b> para plataformas <b>iGaming</b>, optimizando el <span style='text-decoration:underline;'>backoffice</span>, la gestión de datos y los procesos automatizados.</p>
    <div class='detail-section'>
      <span class='detail-icon'>🗄️</span>
      <b>Gestión de bases de datos SQL:</b>
      <ul class='detail-list'>
        <li>Creación de tablas y procedimientos almacenados.</li>
        <li>Optimización de consultas.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🚀</span>
      <b>Despliegues y calidad:</b>
      <ul class='detail-list'>
        <li>Despliegues mensuales a producción, asegurando estabilidad y calidad.</li>
        <li>Compilación y despliegue automatizado con <b>Argo CD</b> (CI/CD).</li>
        <li>Revisión de código para buenas prácticas y cumplimiento de estándares.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>📋</span>
      <b>Gestión y diseño:</b>
      <ul class='detail-list'>
        <li>Gestión de tareas con <b>Jira</b> y flujo ágil.</li>
        <li>Uso de la librería <b>MUI</b> para interfaces modernas, accesibles y personalizadas.</li>
      </ul>
    </div>
  </div>`,
    },
    {
      title: "TimeShare",
      description: "React || Nodejs || MongoDb || Javascript || HTML || CSS",
      imgUrl: projImg1,
      url: "https://timeshare.netlify.app/",
      git: "https://github.com/TeresaChaves/BDT-client",
      detail: `<div class='detail-timeshare'>
    <p><b>Desarrolladora Fullstack en TimeShare.</b></p>
    <p>Banco de tiempo donde el usuario registrado puede crear, editar y eliminar servicios para la comunidad, y contratar servicios de otros usuarios.</p>
    <div class='detail-section'>
      <span class='detail-icon'>⏳</span>
      <b>Funcionamiento:</b>
      <ul class='detail-list'>
        <li>El pago se realiza con una moneda única: el tiempo.</li>
        <li>Cada usuario dispone de 5 horas al darse de alta y puede contratar servicios o sumar horas si otros contratan los suyos.</li>
        <li>Gestión de estados de los servicios: pendiente y aceptado, controlado por el usuario.</li>
        <li>Valoración y comentarios sobre los servicios.</li>
      </ul>
    </div>
    <div class='detail-section'>
      <span class='detail-icon'>🛠️</span>
      <b>Tecnologías y características:</b>
      <ul class='detail-list'>
        <li>Frontend en <b>ReactJS</b> y Backend en <b>Express</b> y <b>NodeJS</b>.</li>
        <li>API propia conectada a <b>Mongo Atlas</b>.</li>
        <li>Uso avanzado de <b>CSS</b> (responsive design, animation keyframes).</li>
        <li>React Bootstrap, Cloudinary, sistema de actualización de token.</li>
        <li>Renderizado condicional, roles de usuario (user y admin), rutas protegidas.</li>
        <li>Gestión de errores, ventanas modales y alertas periféricas para mejorar la experiencia de usuario.</li>
      </ul>
    </div>
  </div>`,
    },
    {
      title: "Geofilm",
      description:
        "Express || Javascript || HTML || CSS || Boostrap || MongoDb || Postman",
      imgUrl: projImg2,
      git: "https://github.com/gonzalodeveloper/geofilm",
      detail: `<div class='detail-geofilm'>
      <p><b>Desarrolladora Fullstack en GeoFilm.</b></p>
      <p>App para localizar lugares de rodaje de películas y series favoritas.</p>
      <div class='detail-section'>
        <span class='detail-icon'>🗺️</span>
        <b>Características:</b>
        <ul class='detail-list'>
          <li>Conexión con API de IMDB y Google Maps.</li>
          <li>Base de datos propia gestionada con MongoDB.</li>
          <li>Interfaz intuitiva y responsive.</li>
        </ul>
      </div>
    </div>`,
    },
    {
      title: "Messenger is Alive",
      description:
        "Javascript || HTML || CSS || Socket.io || NodeJs || Boostrap || LottieWeb || Express|| React",
      imgUrl: messenger,
      git: "https://github.com/TeresaChaves/Chat_Shocketio",
      detail: `<div class='detail-messenger'>
      <p><b>Desarrolladora Fullstack en Messenger is Alive.</b></p>
      <p>App de chat con múltiples escenarios: público, privado, notificaciones y gestión de usuarios.</p>
      <div class='detail-section'>
        <span class='detail-icon'>💬</span>
        <b>Características:</b>
        <ul class='detail-list'>
          <li>Chat público y privado.</li>
          <li>Notificaciones de usuario y mensajes no leídos.</li>
          <li>Gestión de usuarios en línea y fuera de línea.</li>
          <li>Animaciones con LottieWeb y diseño responsive.</li>
        </ul>
      </div>
    </div>`,
    },
  ];
  const projets3 = [
    {
      title: "Eternal Joaquin",
      description: "Javascript || HTML || CSS || CanvasRenderingContext2D",
      imgUrl: projImg3,
      detail: `<div class='detail-joaquin'>
      <p><b>Desarrolladora de juegos en Canvas: Eternal Joaquin.</b></p>
      <p>Juego divertido donde el objetivo es hacer eterno al jugador Joaquín evitando bombas y comiéndote a los Joaquines.</p>
      <div class='detail-section'>
        <span class='detail-icon'>🕹️</span>
        <b>Tecnologías:</b>
        <ul class='detail-list'>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>CanvasRenderingContext2D</li>
        </ul>
      </div>
      <div class='detail-section'>
        <span class='detail-icon'>🎮</span>
        <span>Diseño de mecánicas, animaciones y experiencia de usuario.</span>
      </div>
    </div>`,
      url: "https://teresachaves.github.io/Zombie_Runner/",
      git: "https://github.com/TeresaChaves/Zombie_Runner",
    },
  ];

  let videos = [
    // {
    //   id: 1,
    //   nameVideo: "TimeShare",
    //   poster: projImg1,
    //   videoUri: timeshare,
    // },
    {
      id: 2,
      poster: projImg2,
      nameVideo: "Reel",
      videoUri: geofilm,
    },
    // {
    //   id: 3,
    //   poster: projImg3,
    //   nameVideo: "EternalJoaquin",
    //   videoUri: joaquin,
    // },
    {
      id: 4,
      poster: messenger,
      nameVideo: "Sabor a Perú",
      videoUri: messegerVideo,
    },
    {
      id: 5,
      poster: creditimage,
      nameVideo: "Las Hurdes, tierra con alma",
      videoUri: creditsong,
    },
    {
      id: 5,
      poster: jaula,
      nameVideo: "Jaula",
      videoUri: jaulavideo,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: projects.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  {/* <p className="pp">Y estos son los culpables de que me haya enamorado del Desarrollo Web. Cada uno de ellos me ha enseñado algo,
                                        a intentar crear un mundo más colaborativo, a rendir tributo al mejor jugador del planeta, a unir mis dos pasiones, el cine y la programación
                                      y todo gracias al código. ¿A quién no le va a gustar? </p> */}
                  <Tab.Container id="npm start" defaultActiveKey="first">
                    <div className="container-title-portfolio">
                      <div className="left-section">
                        <img
                          className="img-title-portofolio2"
                          src={rayo}
                          alt="rayo"
                        />
                      </div>
                      <div className="center-section">
                        <h2 className="projectstext">DEVELOPER</h2>
                      </div>
                      <div className="right-section">
                        <img
                          className="img-title-portofolio2"
                          src={trespuntos}
                          alt="rayo"
                        />
                      </div>
                    </div>
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Fullstack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Games</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col>
                            <Slider {...sliderSettings}>
                              {projects.map((project, index) => (
                                <div key={index}>
                                  <ProjectCard {...project} />
                                </div>
                              ))}
                            </Slider>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col>
                            <Slider {...sliderSettings}>
                              {projets2.map((project2, index) => (
                                <div key={index}>
                                  <ProjectCard {...project2} />
                                </div>
                              ))}
                            </Slider>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projets3.map((project3, index) => {
                            return <ProjectCard key={index} {...project3} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <section className="section-container">
          <Row>
            <Col>
              <div className="container-title-portfolio">
                <div className="left-section">
                  <img
                    className="img-title-portofolio2"
                    src={play}
                    alt="rayo"
                  />
                </div>
                <div className="center-section">
                  <h2 className="projectstext">VIDEO</h2>
                </div>
                <div className="right-section">
                  <img
                    className="img-title-portofolio2"
                    src={pausa}
                    alt="rayo"
                  />
                </div>
              </div>

              <div className="container-title-portfolio">
                {" "}
                <p className="desc-demo">
                  Una selección de algunos de los trabajos que he realizado a lo
                  largo de mi trayectoria como editora y grafista.
                </p>
              </div>
              <div className="gallery">
                {videos.map((item, index) => {
                  let divRef = createRef(null);
                  const openModel = () => {
                    divRef.current.classList.remove("video");
                    divRef.current.classList.add("model");
                    setModel(true);
                  };
                  const closeModel = () => {
                    divRef.current.classList.add("video");
                    divRef.current.classList.remove("model");
                    setModel(false);
                  };

                  return (
                    <div ref={divRef} className="video" key={index}>
                      {model && (
                        <button
                          className="model-close-btn"
                          onClick={() => closeModel()}>
                          X
                        </button>
                      )}
                      <div
                        className="video-container"
                        onClick={() => openModel()}>
                        <p className="title-video">{videos[index].nameVideo}</p>
                        <hr></hr>
                        <Video
                          style={{ width: "100%" }}
                          autoPlay={model}
                          controls={[
                            "PlayPause",
                            "Seek",
                            "Time",
                            "Volume",
                            "Fullscreen",
                          ]}
                          poster={item.poster}>
                          <source src={item.videoUri} type="video/webm" />
                        </Video>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

export default Projects;
