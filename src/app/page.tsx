"use client";
import Popular from "@/components/Popular/Popular";
import Brands from "@/components/Brands";
import Companies from "@/components/Companies";
import Categories from "@/components/Categories";
import { motion, AnimatePresence } from "framer-motion";
export default function Home() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.2 }}
        >
          <Categories numItemsToShow={8} />
          <Popular numItemsToShow={10} />
          <div className="info_brands">
            <Brands />
            <Companies />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
