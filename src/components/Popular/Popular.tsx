import popular from "../../assets/popular.json";
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Popular.scss";

interface PopularProps {
  numItemsToShow: number;
}

export default function Popular({ numItemsToShow }: PopularProps) {
  const [itemsToShow, setItemsToShow] = useState(numItemsToShow);
  const totalItems = popular.length;

  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + totalItems);
  };

  const remainingItems = totalItems - itemsToShow;

  

  return (
    <>
      <div className="topsell">
        <div className="topsell-title">
          <h3>Популярные</h3>
        </div>

        <div className="content_items">
          <div className="item-block-wrapper">
            <TransitionGroup component={null}>
              {popular.slice(0, itemsToShow).map((obj) => (
                <CSSTransition key={obj.id} classNames="fade" timeout={300}>
                  <ItemBlock
                    src={obj.imageSrc}
                    price={obj.price}
                    title={obj.title}
                    className="item-block"
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>

        {remainingItems > 0 && (
          <button className="more" onClick={showMoreItems}>
            Показать больше
          </button>
        )}
      </div>
    </>
  );
}
