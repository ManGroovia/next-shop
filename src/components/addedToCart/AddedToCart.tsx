export default function addedToCart() {
  return (
    <div className="added_container">
      <div className="left_side">
        <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fobject.pscloud.io%2Fcms%2Fcms%2FPhoto%2Fimg_0_77_3811_4_6_320.webp&w=256&q=75" alt="" />
      </div>
      <div className="right_side">
        <div className="top">
          <h4> Смартфон IPhone 14 Pro Max 256/6 Space Gray</h4>
          <p>680 000 ₸</p>
        </div>

        <div className="bot">
          <div className="counter">
            <button className="btn">-</button>
            <div className="num">1</div>
            <button className="btn">+</button>
          </div>
          <button className="remove">Удалить из корзины</button>
        </div>
      </div>
    </div>
  );
}
