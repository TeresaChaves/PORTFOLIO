import { useEffect, useRef, useState } from "react";
import "./ModalBlendy.css";
import { createBlendy } from "blendy";
import { createPortal } from "react-dom";

function ModalBlendy() {
  const blendy = useRef();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    blendy.current = createBlendy({ animation: "dynamic" });
  }, []);

  return (
    <div>
      {showModal &&
        createPortal(
          <Modal
            onClose={() => {
              blendy.current?.untoggle("example", () => {
                setShowModal(false);
              });
            }}></Modal>,
          document.body
        )}
      <button
        className="button"
        data-blendy-from="example"
        onClick={() => {
          setShowModal(true);
          blendy.current?.toggle("example");
        }}>
        <span>Open</span>
      </button>
    </div>
  );
}

function Modal({ onClose }) {
  return (
    <div className="modal" data-blendy-to="example">
      <div>
        <div className="modal__header">
          <h2 className="modal__title">Blendy</h2>
          <button className="modal__close" onClick={onClose}></button>
        </div>
        <div className="modal__content">
          <p>
            Meet Blendy, a framework-agnostic tool that smoothly transitions one
            element into another with just a few lines of code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalBlendy;
