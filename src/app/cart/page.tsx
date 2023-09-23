"use client";

import AddedToCart from "@/components/addedToCart/AddedToCart";
import { clearCart } from "@/redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import CartEmpty from "@/components/cartEmpty";


export default function Cart() {
  
  const dispatch = useDispatch();
  const {totalPrice,items} = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  const onClickClearCart = () =>{
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearCart())
    }

  }
  const formatNumberWithSpaces = (number: number) => {
    return number.toLocaleString("ru-RU");
  };

  if (!totalPrice){
    return <CartEmpty/>
  }
  return (
    <div className="cart_container">
      <div className="cart">
        <div className="cart_content">
          <div className="added">
            <h3>Добавленные товары</h3>
            <div className="items">
              {items.map((item) => (
                <AddedToCart key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className="cart_title">
            <div onClick={onClickClearCart}  className="clear_cart">
              <img src="trash.svg" alt="" />
              <p>Очистить корзину</p>
            </div>
          </div>
        </div>
        <div className="items_info">
          <div>
            Всего товаров : <span>{totalCount} шт</span>
          </div>
          <div>
          Сумма заказа : <span className="total_price">{formatNumberWithSpaces(totalPrice)} ₸</span>
          </div>
        </div>
        <div className="btnPay">
          <button>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
}
