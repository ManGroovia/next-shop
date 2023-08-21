"use client";
import PcCategoryBlock from "@/components/pcCateroryBlock/pcCategoryBlock";

import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
interface Subcategory {
  id: number;
  title: string;
  imageSrc: string;
  category: string;
}
interface Category {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  subcategories?: Subcategory[];
}

export default function CategoryBlocks() {
  const [categoryList, setCategoryList] = React.useState<Category[]>([]);
  React.useEffect(() => {
    fetch("https://64dcc6a1e64a8525a0f71f73.mockapi.io/allCategories")
      .then((res) => res.json())
      .then((categoriesList) => {
        setCategoryList(categoriesList);
      });
  }, []);

  const computersAndComponentsIndex = 1;
  const podcategories = categoryList[computersAndComponentsIndex]?.subcategories;
  console.log(podcategories);

  return (
    <>
      {podcategories?.map((obj) => (
        <AnimatePresence key={obj.id}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.2 }}
            className={styles.content}
          >
            <Link href={`/laptops/${obj.category}`}>
              <PcCategoryBlock src={obj.imageSrc} title={obj.title} />
            </Link>
          </motion.div>
        </AnimatePresence>
      ))}
    </>
  );
}
