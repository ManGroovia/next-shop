import Image from "next/image";
interface IItemBlock{
  src:  string;
  price: number;
  title: string;
}

export default function ItemBlock({src, title, price}: IItemBlock) {
  return (
    <>
      
        <div className="item-block-wrapper">
          <div className="item-block">
            <div className="item-block-fav">
              <img src="fav.svg" alt="" />
            </div>
            <div className="item-block-img">
            <Image src = {src} alt="img" width={136} height={136}/>
            </div>
            <div className="item-block-title">
              <h4>Смартфон Apple iPhone 13 128GB Starlight</h4>
              <p>340 000 ₸</p>
            </div>
            <div className="item-block-showcase">Есть в наличии</div>
            <div className="item-block-footer">
              <button>Добавить в корзину</button>
              <img src="itemCart.svg" alt="" />
            </div>
          </div>
        </div>
        
        
      
      
    </>
  );
}
