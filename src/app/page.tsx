"use client";
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import Brands from "@/components/Brands";
import Companies from "@/components/Companies";
import Categories from "@/components/Categories";
import popular from '../assets/popular.json'
export default function Home() {
  return (
    <>
      <Categories />
      <div className="topsell">
        <div className="topsell-title">
          <h3>Популярные</h3>
        </div>
        
        <div className="content_items">
        {
          popular.map((obj)=>(<ItemBlock src={obj.imageSrc} price = {obj.price} title={obj.title}/>))
        }
        </div>
        <button className="more">Показать больше</button>
        <Brands />
        <Companies />
      </div>
    </>
  );
}
