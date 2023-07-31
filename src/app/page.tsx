"use client";
import Popular from "@/components/Popular/Popular";
import Brands from "@/components/Brands";
import Companies from "@/components/Companies";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
      <Categories />
      <Popular numItemsToShow={10} />
      <div className="info_brands">
        <Brands />
        <Companies />
      </div>
    </>
  );
}
