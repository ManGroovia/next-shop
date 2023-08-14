"use client"
import PcCategoryBlock from "@/components/pcCateroryBlock/pcCategoryBlock";
import computerCategories from "../../assets/computerCategories.json";
import Link from "next/link";
import styles from "./styles.module.scss";
import { motion, AnimatePresence } from "framer-motion";


export default function CategoryBlocks() {
  return (
    <>
      {computerCategories.map((obj) => (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.2 }}
            className={styles.content}
          >
            <Link href={`/laptops/${obj.category}`} key={obj.title}>
              <PcCategoryBlock src={obj.imageSrc} title={obj.title} />
            </Link>
          </motion.div>
        </AnimatePresence>
      ))}
    </>
  );
}
