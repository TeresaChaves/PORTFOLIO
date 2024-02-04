import { Card, Button, Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "./Projects.css";
import ProjectCard from "../../components/ProjectsCard/ProjectCard.jsx";
import projImg1 from "../../assets/img/timeshareok.png";
import projImg2 from "../../assets/img/geofilm.png";
import projImg3 from "../../assets/img/eternalok.png";
import timeshare from "../../assets/animations/timesharelinkedin.mp4";
import geofilm from "../../assets/animations/geofilm.mp4";
import joaquin from "../../assets/animations/eternalconmarco.mp4";
import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";
import { Fullscreen } from "react-bootstrap-icons";
import React, { useState, createRef } from "react";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import messenger from "../../assets/img/Messenger.jpeg";
import messegerVideo from "../../assets/animations/MessengerAlive.mp4";
import creditsong from "../../assets/animations/CR2v.mp4";
import creditimage from "../../assets/img/Credit2.jpg";
import osoigo from "../../assets/img/osoigo.jpeg";
import pablo from "../../assets/img/pablo.jpeg";

function Projects() {
  const [model, setModel] = useState(false);
  const projects = [
    {
      title: "Osoigo",
      url: "https://www.osoigo.com/",
      description:
        "React || Figma || Express || Django || Node Javascript || Python || Swagger",
      imgUrl: osoigo,
      git: "https://github.com/TeresaChaves",
      detail:
        "Desarrolladora Front-end y UX-UI en Osoigo, creación y diseño de proyectos innovadores de participación ciudadana. Mi enfoque principal está en la implementación de soluciones tecnológicas utilizando React, así como en la conceptualización y diseño utilizando la plataforma Figma. Mi trabajo abarca desde la conexión con APIs hasta la implementación de medidas de accesibilidad para garantizar la inclusividad en todos los aspectos del desarrollo.",
    },
    {
      title: "Credit Song",
      url: "https://www.creditsong.com/",
      description:
        "Javascript || HTML || CSS || Reactjs || Boostrap || LottieWeb || Jquery || ContexAPI ",
      imgUrl: creditimage,
      git: "https://github.com/TeresaChaves/ClienteBlock/tree/master",
      detail:
        "Desarrollo y diseño de toda la parte del Frontend. CreditSong es una startup con sede en Barcelona y Dubai basada en la tecnología blockchain centrada en la industria musical.",
    },

    {
      title: "Escenógrafo-Arquitectura",
      description:
        "React || Figma || CSS || Node || Javascript || Sass || HTML",
      imgUrl: pablo,
      git: "https://github.com/TeresaChaves",
      detail:
        "Desarrolladora Front-end y UX-UI del portfolio del escenógrafo Pablo Chaves, recien nominado a los premios MAX.  He desarrollado la plataforma usando React, así como en la conceptualización y diseño utilizando la plataforma Figma.",
    },
  ];

  const projets2 = [
    {
      title: "TimeShare",
      description: " React || Nodejs || MongoDb || Javascript || HTML || CSS  ",
      imgUrl: projImg1,
      url: "https://timeshare.netlify.app/",
      git: "https://github.com/TeresaChaves/BDT-client",
      detail:
        "Se trata de un banco de tiempo, donde el usuario registrado puede crear los servicios que quiere ofrecer a la comunidad (editarlos y eliminarlos) y contratar un servicio de otro usuario. El pago se hace a través de una moneda única: el tiempo ⏳.Cada usuario dispone de 5 horas al darse de alta en nuestra app,con las cuales podrá empezar a contratar servicios de otros usuarios, y sumará horas a su perfil si otros usuarios contratan su servicio. TimeShare ha sido creada en ReacJs y Express(cliente y servidor), con la ayuda de NodeJs y conectada con nuestra propia API en Mongo Atlas. Para el correcto funcionamiento de la app, se ha hecho uso avanzado de CSS(responsive design, animation keyframes) React Boostrap, Cloudinary, sistema de actualización del token, renderizado condicional, juego de roles: user y admin, rutas protegidas, gestión de errores, ventanas modales y alertas periféricas que mejoran y ayudan a experiencia del usuario.",
    },
    {
      title: "Geofilm",
      description:
        "Express || Javascript || HTML || CSS || Boostrap || MongoDb || Postman ",
      imgUrl: projImg2,
      git: "https://github.com/gonzalodeveloper/geofilm",
      detail:
        "GeoFilm es una app que te permite localizar dónde se han rodado tus películas o series favoritas. Para ello creamos una interfaz conectada tanto con la Api de IMDB como con la Google Maps, creando así una base de datos propia gestionada a través de Mongo DB",
    },

    {
      title: "Messenger is Alive",
      description:
        "Javascript || HTML || CSS || Socket.io || NodeJs || Boostrap || LottieWeb || Express|| React  ",
      imgUrl: messenger,
      git: "https://github.com/TeresaChaves/Chat_Shocketio",
      detail:
        "He entrado en muchos detalles en la construcción de esta aplicación de chat para cubrir casi todos los escenarios posibles, tales como la posibilidad tanto de chat público como privado, notificación de unión de usuario al chat, usuario fuera de línea y usuario en línea, los nombres de usuario duplicados, mensajes de error, notificación de mensajes no leídos, chat privado con varios usuarios al mismo tiempo y mucho más.",
    },
  ];
  const projets3 = [
    {
      title: "Eternal Joaquin",
      description: "Javascript || HTML || CSS || CanvasRenderingContext2D    ",
      imgUrl: projImg3,
      detail:
        "Es un juego creado en Canvas y a través del lenguaje JavaScript. Es un divertido juego que hace que el famoso y querido jugador del Real Betis, Joaquín, se haga eterno y juegue siempre para el Betis, para ello tendrás que ir con tu Zombie comiéndote a todos los Joaquín que salgan y evitando las bombas, si consigues comerte a 10 Joaquín lo harás eterno y habrás superado el juego.",
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
      nameVideo: "GeoFilm",
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
      nameVideo: "Messenger Is Alive",
      videoUri: messegerVideo,
    },
    {
      id: 5,
      poster: creditimage,
      nameVideo: "Credit Song",
      videoUri: creditsong,
    },
  ];

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
                  }
                >
                  <h2 className="projectstext">Proyectos</h2>
                  {/* <p className="pp">Y estos son los culpables de que me haya enamorado del Desarrollo Web. Cada uno de ellos me ha enseñado algo,
                                        a intentar crear un mundo más colaborativo, a rendir tributo al mejor jugador del planeta, a unir mis dos pasiones, el cine y la programación
                                        y todo gracias al código. ¿A quién no le va a gustar? </p> */}
                  <Tab.Container id="npm start" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projets2.map((project2, index) => {
                            return <ProjectCard key={index} {...project2} />;
                          })}
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

        <section>
          <Row>
            <Col>
              <h2 className="texwebdemo" style={{ textAlign: "center" }}>
                Demos
              </h2>
              <p className="desc-demo">
                Estos son algunos de mis trabajos que no están subidos a
                producción pero podemos ver un pequeño ejemplo de cómo funcionan
                en local.
              </p>
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
                          onClick={() => closeModel()}
                        >
                          X
                        </button>
                      )}
                      <div
                        className="video-container"
                        onClick={() => openModel()}
                      >
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
                          poster={item.poster}
                        >
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
