"use client"
export default function Home() {
  return (
    <>
    <div className="home">
      <div className="title">
        <h3>Категории</h3>
      </div>
      <div className="kategoryes">
        <div className="kategory">
          <img src="kategory/phone.svg" alt="" />
          <p>Смартфоны</p>
        </div>
        <div className="kategory">
          <img src="/kategory/laptop.svg" alt="" />
          <p>Компьютеры и ноутбуки</p>
        </div>
        <div className="kategory">
        <img src="/kategory/tv.svg" alt="" />
          <p>Телевизоры</p>
        </div>
        <div className="kategory">
        <img src="/kategory/watch.svg" alt="" />
          <p>Умные часы</p>
        </div>
        <div className="kategory">
        <img src="/kategory/airpods.svg" alt="" />
          <p>Наушники</p>
        </div>
        <div className="kategory">
        <img src="/kategory/conder.svg" alt="" />
          <p>Кондиционеры</p>
        </div>
        <div className="kategory">
        <img src="/kategory/freez.svg" alt="" />
          <p>Холодильники</p>
        </div>
        <div className="kategory">
        <img src="/kategory/wash.svg" alt="" />
          <p>Стиральные машины</p>
        </div>

      </div>
      <button className="more">Показать больше</button>
    </div>

    </>
  )
}
