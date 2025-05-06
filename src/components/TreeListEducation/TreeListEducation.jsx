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

export default function TreeListEducation({}) {
  return (
    <Container>
      <Tree name="FORMACIÓN ACADEMICA" style={{ opacity: "0.8" }} defaultOpen>
        <Tree name="2021 / 2022" style={{ opacity: "0.5" }} />
        <Tree name="Full Stack Web Developer">
          <Tree name="IRONHACK" />
          <Tree name="Skills">
            <Tree
              name="HTML, CSS, JavaScript, React"
              style={{ color: "#37ceff" }}
            />
            <Tree
              name="Node.js, Express.js, MongoDB."
              style={{ color: "#37ceff" }}
            />
            <Tree name="Git y GitHub." style={{ color: "#37ceff" }} />
            <Tree name="Scrum y Kanban." style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <ul>
                  <List>
                    Bootcamp intensivo centrado en el desarrollo web con
                    tecnologías como HTML, CSS, JavaScript, React, Node.js y
                    MongoDB.
                  </List>

                  <List>
                    Formación práctica en metodologías ágiles, control de
                    versiones y desarrollo de aplicaciones completas desde cero.
                  </List>
                </ul>
              </div>
            </Tree>
          </Tree>
        </Tree>
        <Tree name="2008 / 2009" style={{ opacity: "0.5" }} />
        <Tree name="Postgrado en Postproducción y VFX">
          <Tree name="Escuela TAI" />
          <Tree name="Skills">
            <Tree name="Avid Media Composer" style={{ color: "#37ceff" }} />
            <Tree
              name="Composición y VFX para cine y publicidad con Nuke"
              style={{ color: "#37ceff" }}
            />
            <Tree name="Adobe After Effects" style={{ color: "#37ceff" }} />
            <Tree name="Adobe Photoshop" style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <List>
                  Máster centrado en la formación de profesionales en
                  postproducción y efectos visuales. Está dirigido a estudiantes
                  con formación audiovisual o profesionales del sector que
                  desean especializarse en la supervisión de VF
                </List>
              </div>
            </Tree>
          </Tree>
        </Tree>
        <Tree name="2003 / 2005" style={{ opacity: "0.5" }} />

        <Tree name="Téc. Sup. Realización Audiovisuales">
          <Tree name="ESAMA" />
          <Tree name="Skills">
            <Tree name="Avid Media Composer" style={{ color: "#37ceff" }} />
            <Tree name="Adobe Premiere" style={{ color: "#37ceff" }} />
            <Tree name="Adobe After Effects" style={{ color: "#37ceff" }} />
            <Tree name="Adobe Photoshop" style={{ color: "#37ceff" }} />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <List>
                  Ciclo formativo de grado superior tiene una duración de dos
                  años académicos, con un total de 2.000 horas lectivas. Está
                  enfocado en la formación práctica para la creación de
                  productos audiovisuales y espectáculos
                </List>
              </div>
            </Tree>
          </Tree>
        </Tree>
        <Tree name="2000 / 2003" style={{ opacity: "0.5" }} />

        <Tree name="Diplomatura Trabajo Social ">
          <Tree name="Universidad Pablo de Olavide" />
          <Tree name="Skills">
            <Tree
              name="Fundamentos del trabajo social."
              style={{ color: "#37ceff" }}
            />
            <Tree
              name="Políticas sociales y servicios sociales"
              style={{ color: "#37ceff" }}
            />
            <Tree name="Prácticas profesionales" style={{ color: "#37ceff" }} />
            <Tree
              name="Intervención familias y grupos"
              style={{ color: "#37ceff" }}
            />
            <Tree name="Descripción">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  padding: 10,
                }}>
                <List>
                  Capacitación para el ejercicio profesional basado en promover
                  el cambio social y la resolución de problemas en las
                  relaciones humanas
                </List>
              </div>
            </Tree>
          </Tree>
        </Tree>
      </Tree>
    </Container>
  );
}
