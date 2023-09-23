import React from "react";
import Link from "next/link";
export default function CartEmpty() {
  return (
    <>
      <div className="containerCart">
        <div className="content">
          <h2>
            Корзина пустая <img className="sad" src="sad2.svg" alt="" />
          </h2>
          <p>
            Вероятнее всего, вы еще не выбрали подходящий товар.
            <br />
            Для того чтоб посмотреть полный каталог перейдите на главную
            страницу.
          </p>
          <img className="empty" src="cartEmpty.svg" alt="" />
          <Link href="/">
            <span>Вернутся на главную</span>
          </Link>
        </div>
      </div>
    </>
  );
}
