
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Popular.scss";
import axios from 'axios'
interface PopularProps {
  numItemsToShow: number;
}

interface Ipopular {
  id: string;
  imageSrc: string;
  title: string;
  price: number;
}
export default function Popular({ numItemsToShow }: PopularProps) {
  const [itemsToShow, setItemsToShow] = useState(numItemsToShow);

   const [popularItems, setPopularItems] = React.useState<Ipopular[]>([]);

  React.useEffect(() => {
    
axios.get("https://64dcc6a1e64a8525a0f71f73.mockapi.io/popular").then((res)=>{
  setPopularItems(res.data)
})

  }, []);
 const totalItems = popularItems.length;
  const remainingItems = totalItems - itemsToShow;
  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + totalItems);
  };
  


  return (
    <>
      <div className="topsell">
        <div className="topsell-title">
          <h3>Популярные</h3>
        </div>

        <div className="content_items">
          <div className="item-block-wrapper">
            <TransitionGroup component={null}>
              {popularItems.slice(0, itemsToShow).map((obj) => (
                <CSSTransition key={obj.id} classNames="fade" timeout={500}>
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
