import React, { useEffect, useRef, useState } from "react";
import "./modal.scss";

//Types
type Props = {
  active?: boolean;
  id?: string;
  children: JSX.Element;
  onClose?:()=>void
}


//
const Modal = (props:Props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

export const ModalContent = (props:Props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default Modal;
