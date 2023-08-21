import Link from "next/link";


import CategoryBlock from "./CategoryBlock";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
interface PopularProps {
  numItemsToShow: number;
}
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
export default function Categories({ numItemsToShow }: PopularProps) {
  const [itemsToShow, setItemsToShow] = React.useState(numItemsToShow);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  const showMoreItems = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + numItemsToShow);
    setShouldAnimate(true);
  };

  const [categoryList, setCategoryList] = React.useState<Category[]>([]);
  const totalItemsToShow = categoryList.length;
  const remainingItems = totalItemsToShow - itemsToShow;
  React.useEffect(() => {
    fetch("https://64dcc6a1e64a8525a0f71f73.mockapi.io/allCategories")
      .then((res) => res.json())
      .then((categoriesList) => {
        setCategoryList(categoriesList);
      });
  }, []);

  return (
    <>
      <div className="home">
        <div className="title">
          <h3>Категории</h3>
        </div>

        <div className="kategoryes">
          {categoryList.slice(0, itemsToShow).map((obj, index) => (
            <Link href={`/${obj.category}`} key={obj.title}>
              <AnimatePresence>
                <motion.div
                  initial={shouldAnimate ? { opacity: 0, y: 15 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: shouldAnimate ? 0.2 : 0 }}
                  key={index}
                >
                  <CategoryBlock
                    key={obj.id}
                    src={obj.imageSrc}
                    title={obj.title}
                  />
                </motion.div>
              </AnimatePresence>
            </Link>
          ))}
        </div>

        {remainingItems > 0 && (
          <button onClick={showMoreItems} className="more">
            Показать больше
          </button>
        )}
      </div>
    </>
  );
}
