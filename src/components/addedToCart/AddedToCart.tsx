import { addItem, minusItem, removeItem } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

interface Iprops {
  id: number;
  title: string;
  price: number;
  count: number;
  src: string;
}

export default function addedToCart({ id, title, price, count, src }: Iprops) {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({id}));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = ()=>{
    dispatch(removeItem({id}));
  }
  const formatNumberWithSpaces = (number: number) => {
    return number.toLocaleString("ru-RU");
  };
  return (
    <div className="added_container">
      <div className="left_side">
        <img src={src} alt="" />
      </div>
      <div className="right_side">
        <div className="top">
          <h4> {title}</h4>
          <p>{formatNumberWithSpaces(price * count)}₸</p>
        </div>
        <div  className="delete"> <img  onClick={onClickRemove} src="delete.svg" alt="" /></div>
        <div className="bot">
          <div className="counter">
            <button onClick={onClickMinus} className="btn">-</button>
            <div className="num">{count}</div>
            <button onClick={onClickPlus} className="btn">+</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
