import React, { useRef, useContext } from "react";
import style from "./modal.module.css";
//context
import { ManagedUI } from "@contexts/ManagedUI";
function Modal({ children, setShowModal }) {
    const { setOpenModal } = useContext(ManagedUI);
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(null);
            setOpenModal(false);
        }
    };
    return (
        <div
            className={style.modalBackground}
            onClick={(e) => closeModal(e)}
            ref={modalRef}
        >
            {children}
        </div>
    );
}

export default Modal;
