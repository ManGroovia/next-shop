"use client";
import popular from "../../../assets/popular.json";
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import styles from "./styles.module.scss";
import laptops from "../../../assets/laptops.json";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
interface Laptop {
  id: number;
  brand: string;
  title: string;
}
export default function Laptops() {
  const [selectedBrand, setSelectedBrand] = React.useState<string | null>(null);
  const handleBrandClick = (brand: string | null) => {
    setSelectedBrand(brand);
  };
  const filteredLaptops = React.useMemo(() => {
    if (selectedBrand) {
      return laptops.filter((laptop) => laptop.brand === selectedBrand);
    } else {
      return laptops;
    }
  }, [selectedBrand]);
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
              <div className="item-block-wrapper">
                {filteredLaptops.map((laptop) => (
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
