"use client";
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import Brands from "@/components/Brands";
import Companies from "@/components/Companies";
import Categories from "@/components/Categories";
export default function Home() {
  return (
    <>
      <Categories />
      <div className="topsell">
        <div className="topsell-title">
          <h3>Популярные</h3>
        </div>

        <ItemBlock />
        <Brands />
        <Companies />
      </div>
    </>
  );
}
