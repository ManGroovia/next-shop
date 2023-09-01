import React from "react";
import Popular from "../Popular/Popular";
interface ModalProps {
  value: string;
  setSearchClose: () => void;
  modalContentRef: any;
}

export default function searchModal({
  setSearchClose,
  value,
  modalContentRef,
}: ModalProps) {
  return (
    <div className="modal_wrapper">
      <div ref={modalContentRef} className="modal_content">
        <div className="title_close">
          <h3>Подходящие товары</h3>
          <button onClick={setSearchClose}>X</button>
        </div>
        <div className="search_content">
          {value === "" ? <p>контент</p> : <p>Введите поисковый запрос</p>}
        </div>
      </div>
    </div>
  );
}
