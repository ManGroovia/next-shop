import Link from "next/link";
import categories from "../assets/categories.json";
import Image from "next/image";
import CategoryBlock from "./CategoryBlock";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
interface PopularProps {
  numItemsToShow: number;
}

export default function Categories({ numItemsToShow }: PopularProps) {
  const [itemsToShow, setItemsToShow] = React.useState(numItemsToShow);
  const totalItemsToShow = categories.length;
  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + numItemsToShow);
  };
  const remainingItems = totalItemsToShow - itemsToShow;

  return (
    <>
      <div className="home">
        <div className="title">
          <h3>Категории</h3>
        </div>
        <div className="kategoryes">
          {categories.slice(0, itemsToShow).map((obj) => (
            <Link href={`/${obj.category}`} key={obj.title}>
              <CategoryBlock src={obj.imageSrc} title={obj.title} />
            </Link>
          ))}
        </div>
        {remainingItems > 0 && (
          <button onClick={showMoreItems} className="more">
            Показать больше
          </button>
        )}
      </div>
    </>
  );
}
