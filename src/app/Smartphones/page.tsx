"use client";
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import styles from "../computers/[laptops]/styles.module.scss";
import Skeleton from "@/components/ItemBlock/Skeleton";
import Sort from "@/components/Sort";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
interface ISubcategory {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  products?: Ilaptops[];
}
interface Iproducts {
  id: number;
  imageSrc: string;
  title: string;
  price: number;
  brandId: number;
  brand: string;
}
interface ICategory {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  subcategories: ISubcategory[];
  products: Iproducts[];
}

interface Ilaptops {
  id: number;
  imageSrc: string;
  title: string;
  price: number;
  brand: string;
  brandId: number;
}
export default function Smartphones() {
 
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
   

    fetch("https://64dcc6a1e64a8525a0f71f73.mockapi.io/allCategories")
      .then((res) => res.json())
      .then((data: ICategory[]) => {
        const smartphonesArray = data.find(
          (category) => category.category === "Smartphones"
        );

        if (smartphonesArray) {
          const brandSet = new Set<string>();
          smartphonesArray.products?.forEach((smartphone) => {
            brandSet.add(smartphone.brand);
          });
          setBrands(["Все", ...Array.from(brandSet)]);

          let filteredSmartphones = smartphonesArray.products || [];
          if (brandId > 0) {
            filteredSmartphones = filteredSmartphones.filter(
              (smartphone) => smartphone.brandId === brandId
            );
          }

          const sortedSmarphones = filteredSmartphones.sort((a, b) => {
            if (sortBy === "price") {
              return order === "asc" ? a.price - b.price : b.price - a.price;
            } else {
              // Default sorting by id or any other property
              return order === "asc" ? a.id - b.id : b.id - a.id;
            }
          });

          setItems(sortedSmarphones);
          setIsLoading(false);
        }
      });
  }, [brandId, sortType]);
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
              <h3>Смартфоны</h3>
            </div>
            <ul>
              {brands.map((brand, i) => (
                <li
                  key={brand}
                  onClick={() => setBrandId(i)}
                  className={brandId === i ? "active" : ""}
                >
                  {brand === "Все" ? "Все производители" : `Смартфоны ${brand}`}
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
                {isLoading
                  ? [...new Array(8)].map((_, index) => (
                      <Skeleton key={index} />
                    ))
                  : items.map((smartphone) => (
                      <ItemBlock
                        key={smartphone.id}
                        src={smartphone.imageSrc}
                        price={smartphone.price}
                        title={smartphone.title}
                        className="item-block"
                      />
                    ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
