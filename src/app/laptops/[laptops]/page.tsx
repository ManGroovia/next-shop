"use client";

import ItemBlock from "@/components/ItemBlock/ItemBlock";
import styles from "./styles.module.scss";
import Skeleton from "@/components/ItemBlock/Skeleton";
import Sort from "@/components/Sort";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ilaptops {
  id: number;
  imageSrc: string;
  title: string;
  price: number;
  brand: string;
  brandId: number;
}

export default function Laptops() {
  const brands = ["Все", "Acer", "Apple", "Asus"];
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [items, setItems] = React.useState<Ilaptops[]>([]);

  const [sortType, setSortType] = React.useState<{
    name: string;
    sortProperty: string;
  }>({
    name: "Популярности",
    sortProperty: "rating",
  });
  const [brandId, setBrandId] = React.useState(0);


  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

    const sortBy = sortType.sortProperty.replace("-", "");
    const category = brandId > 0 ? `brandId=${brandId}` : "";
    fetch(
      `https://64dcc6a1e64a8525a0f71f73.mockapi.io/laptops?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((laptopsArr) => {
        setItems(laptopsArr);
        setIsLoading(false);
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
              <h3>Ноутбуки</h3>
            </div>

            <ul>
              {brands.map((laptop, i:number) => (
                <li
                  key={i}
                  onClick={() => setBrandId(i)}
                  className={brandId === i ? "active" : ""}
                >
                  Ноутбуки {laptop}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.laptop_content}>
            <div className="content_items">
              <Sort
                value={sortType}
                onChangeSortType={(i: { name: string; sortProperty: string }) => setSortType(i)}
              ></Sort>
              <div className="item-block-wrapper">
                {isLoading
                  ? [...new Array(8)].map((_, index) => (
                      <Skeleton key={index} />
                    ))
                  : items.map((laptop) => (
                      <ItemBlock
                        key={laptop.id}
                        src={laptop.imageSrc}
                        price={laptop.price}
                        title={laptop.title}
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
