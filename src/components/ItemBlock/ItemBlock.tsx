import Image from "next/image";
import React from 'react'
interface IItemBlock{
  src:  string;
  price: number;
  title: string;
  className:string;
}

export default function ItemBlock({src, title, price,className}: IItemBlock) {
  const [added, setAdded] = React.useState('Добавить в корзину');

  const onClickAdded = () => {
    if (added === 'Добавить в корзину') {
      setAdded('Добавлено');
    } else {
      setAdded('Добавить в корзину');
    }
  }
  return (
    <>
      
        <div className="item-block-wrapper">
          <div className={className}>
            <div className="item-block-fav">
              <img src="fav.svg" alt="" />
            </div>
            <div className="item-block-img">
            <Image src = {src} alt="img" width={136} height={136}/>
            </div>
            <div className="item-block-title">
              <h4>{title}</h4>
              <p>{price.toLocaleString()}₸</p>
            </div>
            <div className="item-block-showcase">Есть в наличии</div>
            <div className="item-block-footer">
              <button onClick={()=> onClickAdded()} className={added === "Добавлено" ? "active": ""}>{added}</button>
              <img src="itemCart.svg" alt="" />
            </div>
          </div>
        </div>
        
        
      
      
    </>
  );
}
