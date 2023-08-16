import React from "react";
import { motion, AnimatePresence } from "framer-motion";
interface Subcategory {
  id: number;
  title: string;
}

interface SubcategoriesProps {
  subcategories: Subcategory[];
}

const Subcategories: React.FC<SubcategoriesProps> = ({ subcategories }) => {
  return (
    <>
      <AnimatePresence>
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.2 }}
        >
          {subcategories.map((subcategory) => (
            <li key={subcategory.id}>{subcategory.title}</li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </>
  );
};

export default Subcategories;
