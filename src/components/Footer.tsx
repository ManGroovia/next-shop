export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-block">
          <div className="footer-content">
            <div className="footer-left">
              <div className="info"><h3>Полезно</h3> 
              <ul>
                <li>Условия возврата и гарантия</li>
                <li>Доставка и оплата</li>
                <li>Отзывы и предложения</li>
                <li>Условия кредитования</li>
              </ul>
              </div>
              <div className="info"><h3>Компания NextStore</h3>
              <ul>
                <li>Контакты</li>
                <li>О компании</li>
                <li>Сотрудничество</li>
                <li>Промокоды</li>
                <li>Реклама</li>
                </ul></div>
              <div className="info"><h3>Интернет магазин</h3>
              <ul>
                <li>Акции</li>
                <li>Новости</li>
                <li>Сборка игровых компьютеров</li>
                <li>Магазины</li>
                <li>График работы</li>
              </ul>
              </div>
            </div>
            <div className="footer-right">
                <div className="top">
                    <h3>Информационная служба</h3>
                    <p>contact.@nextstore.kz</p>
                    <p>+998 97 712 96 96</p>
                    <p>+998 95 503 09 09</p>
                    <p>Ташкенская 130, Алматы, Казахстан</p>
                </div>
                <div className="bot">
                    <img src="/contact-icons/facebook.svg" alt="" />
                    <img src="/contact-icons/Group.svg" alt="" />
                    <img src="/contact-icons/tg.svg" alt="" />
                    <img src="/contact-icons/tik.svg" alt="" />
                    
                </div>
            </div>
            
          </div>
        </div>
        <div className="line"></div>
        <div className="powered">
            <p>2023 NextStore.kz</p>
            <p>Powered by ManGroovia </p>
        </div>
      </div>
    </>
  );
}
