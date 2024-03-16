import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/icons8-github.svg";
import navIcon3 from "../../assets/img/user-id-svgrepo-com.png";
import { useState, useEffect } from "react";
import logo from "../../assets/img/code-slash-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scroll ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className={
                activeLink === "link" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Proyectos
            </NavLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/teresachavesmaza/">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/TeresaChaves">
                <img className="git-img" src={navIcon2} alt="github" />
              </a>
              <a href="https://drive.google.com/file/d/1SP9MBATgKxTr2446zFdqCmZHfSKRMZou/view?usp=sharing">
                <img className="cv-img" src={navIcon3} alt="instagram" />
              </a>
            </div>
            <div></div>
            <a href={`mailto:ttachaves@hotmail.com`}>
              <button className="contacto-nav">
                <span>contacto</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
