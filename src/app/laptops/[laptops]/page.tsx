"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import styles from "./styles.module.scss";
import Skeleton from "@/components/ItemBlock/Skeleton";
import Sort from "@/components/Sort";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ISubcategory {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  products?: Ilaptops[];
}

interface ICategory {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  subcategories: ISubcategory[];
}

interface Ilaptops {
  id: number;
  imageSrc: string;
  title: string;
  price: number;
  brand: string;
  brandId: number;
}

export default function Laptops() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Ilaptops[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [sortType, setSortType] = useState<{
    name: string;
    sortProperty: string;
  }>({
    name: "Популярности",
    sortProperty: "rating",
  });
  const [brandId, setBrandId] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = brandId > 0 ? `brandId=${brandId}` : "";

    fetch("https://64dcc6a1e64a8525a0f71f73.mockapi.io/allCategories")
      .then((res) => res.json())
      .then((data: ICategory[]) => {
        const laptopsArray = data.find(
          (category) => category.category === "laptops"
        );
        const laptops = laptopsArray?.subcategories.find(
          (sub) => sub.category === "laptops"
        );

        if (laptops) {
          const brandSet = new Set<string>();
          laptops.products?.forEach((laptop) => {
            brandSet.add(laptop.brand);
          });
          setBrands(["Все", ...Array.from(brandSet)]);

          let filteredLaptops = laptops.products || [];
          if (brandId > 0) {
            filteredLaptops = filteredLaptops.filter(
              (laptop) => laptop.brandId === brandId
            );
          }

          const sortedLaptops = filteredLaptops.sort((a, b) => {
            if (sortBy === "price") {
              return order === "asc" ? a.price - b.price : b.price - a.price;
            } else {
              // Default sorting by id or any other property
              return order === "asc" ? a.id - b.id : b.id - a.id;
            }
          });

          setItems(sortedLaptops);
          setIsLoading(false);
        }
      });
  }, [brandId, sortType]);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const laptops = items.map((laptop) => (
    <ItemBlock
      key={laptop.id}
      src={laptop.imageSrc}
      price={laptop.price}
      title={laptop.title}
      className="item-block"
    />
  ));
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.2 }}
          className={styles.laptops_wrapper}
        >
          <div className={styles.brand_filter}>
            <div className={styles.title}>
              <h3>Ноутбуки</h3>
            </div>
            <ul>
              {brands.map((brand, i) => (
                <li
                  key={brand}
                  onClick={() => setBrandId(i)}
                  className={brandId === i ? "active" : ""}
                >
                  {brand === "Все" ? "Все производители" : `Ноутбуки ${brand}`}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.laptop_content}>
            <div className="content_items">
              <Sort
                value={sortType}
                onChangeSortType={(i: { name: string; sortProperty: string }) =>
                  setSortType(i)
                }
              ></Sort>
              <div className="item-block-wrapper">
                {isLoading ? skeletons : laptops}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
