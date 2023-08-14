import { useState } from "react";
import MainCategories from "../katalog-categories/MainCategories";
import allCategories from "../../assets/allCategories.json";
import { motion, AnimatePresence } from "framer-motion";
import SubCategories from "../katalog-categories/SubCategoryList";
import React from "react";
interface Subcategory {
  id: number;
  name: string;
}

interface Category {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  subcategories?: Subcategory[];
}
export default function KatalogModal() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };
  return (
    <>
    <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.2 }}
            ><div className="katalog_wrapper">
            <div className="katalog_left">
              <MainCategories
                categories={allCategories}
                onCategoryClick={handleCategoryClick}
              />
            </div>
    
            <div className="katalog_right">
              <div className="f_column">
               
                  {selectedCategory && selectedCategory.subcategories && (
                  <SubCategories subcategories={selectedCategory.subcategories} />
                )}
                
              </div>
              
            </div>
          </div>
              
            </motion.div>
          </AnimatePresence>
      
    </>
  );
}
