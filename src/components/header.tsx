import Search from "./Search";
import Katalog from "../components/modals/Katalog";
import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";

export default function Header({
  onKatalogButtonClick,

  onSearchClick,
}: {
  onKatalogButtonClick: () => void;
  onSearchClick: () => void;
}) {
  const { items, totalPrice } = useSelector((state) => state.cart);
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

          <Search clickSearch={onSearchClick} />

          <div className="fav_cart">
            <img src="Sevimlilar.svg" alt="" />
            <Link href="/cart">
              <img src="Korzina.svg" alt="" />
            </Link>
          </div>
          <div className="cartInfo">
            <div>{totalPrice} ₸</div>
            <div className="num">
            {items.length} <img src="cart2.svg" alt="" />
            </div>
          </div>
          <div className="login">
            <button>Войти</button>
          </div>
        </div>
      </div>
    </>
  );
}
