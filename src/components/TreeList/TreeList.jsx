import React, { useRef, useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { Container, Title, Frame, Content, toggle, List } from "./styles";
import * as Icons from "./icons";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  // @ts-ignore
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  );
});

export default function TreeList({
  title,
  year01,
  year02,

  company,
  company02,
  tec01,
  tec02,
  tec03,
  project,
}) {
  return (
    <Container>
      <Tree name={title} style={{ opacity: "0.8" }} defaultOpen>
        <Tree name={year01} style={{ opacity: "0.5" }} />
        <Tree name={company}>
          <Tree name={project} />
          <Tree name="Tecnologías">
            <Tree name={tec01} style={{ color: "#37ceff" }} />
            <Tree name={tec02} style={{ color: "#37ceff" }} />
            <Tree name={tec03} style={{ color: "#37ceff" }} />
            <Tree name="Argo CD" style={{ color: "#37ceff" }} />
            <Tree name="Express" style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <ul>
                  <List>
                    Desarrollo y mantenimiento de aplicaciones web con{" "}
                    <b>React, Node.js y Express.</b>
                  </List>

                  <List>
                    Gestión de bases de datos <b>SQL</b>, creación de tablas,
                    procedimientos almacenados y optimización de consultas.
                  </List>
                  <List>
                    Creación de <b>APIs RESTful</b> con Express,
                  </List>

                  <List>
                    Compilación y despliegue automatizado con <b>Argo CD </b>,
                    optimizando la entrega continua (CI/CD).
                  </List>
                  <List>
                    Revisión de código para garantizar buenas prácticas,
                    optimización y cumplimiento de estándares.{" "}
                    <b> Clean code</b> .
                  </List>
                  <List>
                    Gestión de tareas con <b> Jira</b> siguiendo un flujo ágil.
                  </List>
                  <List>
                    Uso de la librería <b>MUI </b> para diseñar interfaces
                    modernas, accesibles y personalizadas.
                  </List>
                </ul>
              </div>
            </Tree>
          </Tree>
        </Tree>
        <Tree name={year02} style={{ opacity: "0.5" }} />
        <Tree name={company02}>
          <Tree name="RTVE Participa" />
          <Tree name="Tecnologías">
            <Tree name="React.js" style={{ color: "#37ceff" }} />
            <Tree name="Node.js" style={{ color: "#37ceff" }} />
            <Tree name="Express" style={{ color: "#37ceff" }} />
            <Tree name="Figma" style={{ color: "#37ceff" }} />
            <Tree name="Swagger" style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <ul>
                  <List>
                    Desarrollo del Frontend de una plataforma de participación
                    ciudadana para RTVE.
                  </List>

                  <List>
                    Implementación de foros, videoencuentros, encuestas y
                    votaciones.
                  </List>
                  <List>
                    Creación de interfaces responsivas y accesibles con HTML5 y
                    SASS.
                  </List>

                  <List>
                    Desarrollo de aplicaciones en React con componentes
                    modulares y reutilizables.
                  </List>
                  <List>Gestión del estado con React Hooks y React Query.</List>
                  <List>
                    Consumo e integración de APIs RESTful para gestión de datos
                    asíncronos.
                  </List>
                  <List>
                    Uso de arquitectura basada en componentes y gestión del
                    estado con React Query.
                  </List>
                </ul>
              </div>
            </Tree>
          </Tree>
          <Tree name="Proyecto escuelas" />
          <Tree name="Tecnologías">
            <Tree name="React.js" style={{ color: "#37ceff" }} />
            <Tree name="Node.js" style={{ color: "#37ceff" }} />
            <Tree name="Express" style={{ color: "#37ceff" }} />
            <Tree name="Figma" style={{ color: "#37ceff" }} />
            <Tree name="Django" style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <ul>
                  <List>
                    Conceptualización y diseño utilizando la plataforma Figma. .
                  </List>

                  <List>
                    Implementación de estilos CSS modulares utilizando SASS,
                  </List>
                  <List>
                    Desarrollo de estructuras HTML semánticas y reutilizables
                    para la implementación de las vistas en Django
                  </List>

                  <List>
                    Componentes de React usando Vite para que compile los
                    archivos y genere bundles de JavaScript optimizados
                  </List>
                </ul>
              </div>
            </Tree>
          </Tree>
        </Tree>
        <Tree name="2021 / 2022" style={{ opacity: "0.5" }} />
        <Tree name="Credit Song">
          <Tree name="Tecnologías">
            <Tree name="React.js" style={{ color: "#37ceff" }} />
            <Tree name="Figma" style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <ul>
                  <List>
                    Se trata de la primera plataforma que comercia con derechos
                    de autor de canciones ayudando artistas e inversores a
                    impulsar su cartera financiera.
                  </List>

                  <List>
                    Desarrollo de arquitectura frontend en React, integración
                    con Web3 y blockchain
                  </List>
                  <List>
                    Creación de interfaces responsivas y accesibles con HTML5 y
                    SASS.
                  </List>
                </ul>
              </div>
            </Tree>
          </Tree>
        </Tree>
        <Tree name="2020 / 2025" style={{ opacity: "0.5" }} />
        <Tree name="Freelance">
          <Tree name="TimeShare" />
          <Tree name="Tecnologías">
            <Tree name="React.js" style={{ color: "#37ceff" }} />
            <Tree name="Node.js" style={{ color: "#37ceff" }} />
            <Tree name="Express" style={{ color: "#37ceff" }} />
            <Tree name="Postman" style={{ color: "#37ceff" }} />
            <Tree name="MongoDB" style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <ul>
                  <List>
                    Implementación de rutas protegidas, gestión de errores,
                    roles (user/admin) y token refresh
                  </List>

                  <List>
                    Uso avanzado de CSS (responsive design, animaciones), React
                    Bootstrap y Cloudinary.
                  </List>
                  <List>
                    Desarrollo en ReactJS y Express, conectada a una API en
                    MongoDB Atlas.
                  </List>
                </ul>
              </div>
            </Tree>
          </Tree>
          <Tree name="Portfolio Escenógrafo" />
          <Tree name="Tecnologías">
            <Tree name="React.js" style={{ color: "#37ceff" }} />
            <Tree name="Node.js" style={{ color: "#37ceff" }} />
            <Tree name="Figma" style={{ color: "#37ceff" }} />
            <Tree name="Next" style={{ color: "#37ceff" }} />
            <Tree name="Tailwind" style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <ul>
                  <List>Implementación SEO con Next.</List>

                  <List>Implementación de enrutado dinámico en Next.</List>
                  <List>
                    Optimización con lazy loading y cloudinary para imágenes,
                    diseño en Figma en colaboración con los bocetos del
                    director.
                  </List>
                </ul>
              </div>
            </Tree>
          </Tree>
        </Tree>
      </Tree>
    </Container>
  );
}
