import { useState } from "react";
import MainCategories from "../katalog-categories/MainCategories";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import SubCategories from "../katalog-categories/SubCategoryList";
import React from "react";
interface Subcategory {
  id: number;
  title: string;
}

interface Category {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  subcategories?: Subcategory[];
}

export default React.memo(function KatalogModal() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  const [dataCategories, setDataCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
   

    axios.get("https://64dcc6a1e64a8525a0f71f73.mockapi.io/allCategories").then((res)=>{
      setDataCategories(res.data)
    })
  }, []);

 
  
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.2 }}
        >
          <div className="katalog_wrapper">
            <div className="katalog_left">
              <MainCategories
                categories={dataCategories}
                onCategoryClick={handleCategoryClick}
              />
            </div>

            <div className="katalog_right">
              <div className="f_column">
                {selectedCategory && selectedCategory.subcategories && (
                  <SubCategories
                    subcategories={selectedCategory.subcategories}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
});
