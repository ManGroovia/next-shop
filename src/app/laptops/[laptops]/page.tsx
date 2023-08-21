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
}
export default function Laptops() {
  const [selectedBrand, setSelectedBrand] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const handleBrandClick = (brand: string | null) => {
    setSelectedBrand(brand);
  };

  const [items, setItems] = React.useState<Ilaptops[]>([]);

  React.useEffect(() => {
    fetch("https://64dcc6a1e64a8525a0f71f73.mockapi.io/laptops")
      .then((res) => {
        return res.json();
      })
      .then((laptopsArr) => {
        setItems(laptopsArr);
        setIsLoading(false)
      });
      
  }, []);

  const filteredLaptops = React.useMemo(() => {
    if (selectedBrand) {
      return items.filter((laptop) => laptop.brand === selectedBrand);
    } else {
      return items;
    }
  }, [selectedBrand, items]);

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
              <li onClick={() => handleBrandClick(null)}>Все</li>
              <li onClick={() => handleBrandClick("Apple")}>Ноутбуки Apple</li>
              <li onClick={() => handleBrandClick("Lenovo")}>
                Ноутбуки Lenovo
              </li>
              <li onClick={() => handleBrandClick("MSI")}>Ноутбуки MSI</li>
              <li onClick={() => handleBrandClick("HP")}>Ноутбуки HP</li>
              <li onClick={() => handleBrandClick("Acer")}>Ноутбуки Acer</li>
              <li onClick={() => handleBrandClick("Asus")}>Ноутбуки Asus</li>
              <li onClick={() => handleBrandClick("Huawei")}>
                Ноутбуки Huawei
              </li>
              <li onClick={() => handleBrandClick("Gigabyte")}>
                Ноутбуки Gigabyte
              </li>
              <li onClick={() => handleBrandClick("Razer")}>Ноутбуки Razer</li>
              <li onClick={() => handleBrandClick("Samsung")}>
                Ноутбуки Samsung
              </li>
            </ul>
          </div>
          <div className={styles.laptop_content}>
            <div className="content_items">
              <Sort></Sort>
              <div className="item-block-wrapper">
                {isLoading
                  ? [...new Array(8)].map((_, index) => (
                      <Skeleton key={index} />
                    ))
                  : filteredLaptops.map((laptop) => (
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
