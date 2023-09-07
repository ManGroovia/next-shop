import Search from "./Search";
import Katalog from "../components/modals/Katalog";
import Link from "next/link";
import React from "react";

export default function Header({
  onKatalogButtonClick,
  
  onSearchClick,
}: {
  onKatalogButtonClick: () => void;
  onSearchClick: () => void;
  
}) {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link href="/">
              <img src="Logo.svg" alt="" />
            </Link>
          </div>
          <div onClick={onKatalogButtonClick} className="katalog">
            <img src="Vector.svg" alt="" />
            <h3>Каталог</h3>
          </div>

          <Search
            clickSearch={onSearchClick}
           
          />

          <div className="fav_cart">
            <img src="Sevimlilar.svg" alt="" />
            <img src="Korzina.svg" alt="" />
          </div>
          <div className="login">
            <button>Войти</button>
          </div>
        </div>
      </div>
    </>
  );
}
