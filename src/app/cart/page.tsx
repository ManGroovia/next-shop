import AddedToCart from "@/components/addedToCart/AddedToCart";

export default function Cart() {
  return (
    <div className="cart_container">
      <div className="cart">
        <div className="cart_content">
          <div className="added">
            <h3>Добавленные товары</h3>
            <div className="items">
              <AddedToCart />
              <AddedToCart />
              <AddedToCart />
              <AddedToCart />
            </div>
          </div>
          <div className="cart_title">
            <div className="clear_cart">
              <img src="trash.svg" alt="" />
              <p>Очистить корзину</p>
            </div>
          </div>
        </div>
        <div className="items_info">
          <div>
            Всего товаров : <span>1 шт</span>
          </div>
          <div>
            Сумма заказа : <span className="total_price">2 720 000 ₸</span>
          </div>
        </div>
        <div className="btnPay">
          <button>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
}
