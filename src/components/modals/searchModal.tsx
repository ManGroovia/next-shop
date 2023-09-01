import React from "react";
import Popular from "../Popular/Popular";
interface ModalProps {
  value: string;
  setSearchClose: () => void;
}

export default function searchModal({ setSearchClose, value }: ModalProps) {
  return (
    <div className="modal_wrapper">
      <div className="modal_content">
        <div className="title_close">
          <h3>Подходящие товары</h3>
          <button onClick={setSearchClose}>X</button>
        </div>
        <div className="search_content">
          {value === "" ? (
            // Если value пустая строка, рендерим компонент "popular"
            // <Popular numItemsToShow={8} />
            <p>контент</p>
          ) : (
            <p>Введите поисковый запрос</p>
          )}
        </div>
      </div>
    </div>
  );
}
