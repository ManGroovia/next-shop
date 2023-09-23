import Image from "next/image";
import React from "react";
import favImg from "../../../public/fav.svg";
import Link from "next/link";
import cartImg from "../../../public/itemCart.svg";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";
interface IItemBlock {
  id: number;
  src: string;
  price: number;
  title: string;
  className?: string;
}

export default function ItemBlock({
  id,
  src,
  title,
  price,
  className,
}: IItemBlock) {
  const [added, setAdded] = React.useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdded = () => {
    const item = {
      id,
      title,
      price,
      src,
    };
    dispatch(addItem(item));
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 300);
  };

  return (
    <>
      <div className="item-block-wrapper">
        <div className={className}>
          <div className="item-block-fav">
            <Image src={favImg} alt="fav" />
          </div>
          <div className="item-block-img">
            <Image src={src} alt="img" width={136} height={136} />
          </div>
          <div className="item-block-title">
            <h4>{title}</h4>
            {typeof price === "number" ? (
              <p>{price.toLocaleString()}₸</p>
            ) : (
              <p>Цена не указана</p>
            )}
          </div>
          <div className="item-block-showcase">Есть в наличии</div>
          <div className="item-block-footer">
            <button
              onClick={onClickAdded}
              className={added ? "button-clicked" : ""}
            >
              {" "}
              + Добавить {addedCount > 0 &&  <i>{addedCount}</i>}
            </button>
            <Link href="/cart">
              <Image
                src={cartImg}
                alt="cart"
                style={{ width: "24px", height: "24px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
