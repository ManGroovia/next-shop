import React from "react";
import { useState } from "react";
interface Category {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
}

interface MainCategoriesProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

const MainCategories: React.FC<MainCategoriesProps> = ({
  categories,
  onCategoryClick,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const handleCategoryClick = (category: Category) => {
    onCategoryClick(category);
    setActiveCategoryId(category.id);
  };
  return (
    <ul>
      <div className="katalog_name">
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={(e) => {
              onCategoryClick(category);
              handleCategoryClick(category);
            }}
            className={activeCategoryId === category.id ? "active" : ""}
          >
            {category.title}
          </li>
        ))}
      </div>
    </ul>
  );
};

export default MainCategories;
