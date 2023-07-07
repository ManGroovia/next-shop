export default function Header() {
  return (
    <>
      <div className="container">
      <div className="header">
        <div className="logo">
            <img src="Logo.svg" alt="" />
        </div>
        <div className="katalog">
            <img src="Vector.svg" alt="" />
            <h3>Каталог</h3>
        </div>
        <div className="search">
          <input type="text" placeholder="Введите название товара" />
          <img src="qidirish.svg" alt="" />
        </div>
        <div className="fav_cart">
          <img src="Sevimlilar.svg" alt="" />
          <img src="Korzina.svg" alt="" />
        </div>
        <div className="login">
          <button>Войти</button>
        </div>
      </div>
      </div>
    </>
  );
}