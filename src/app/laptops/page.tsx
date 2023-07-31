
import PcCategoryBlock from "@/components/pcCateroryBlock/pcCategoryBlock";
import computerCategories from "../../assets/computerCategories.json"
import Link from "next/link";
import styles from "./styles.module.scss"
import CategoryBlock from "@/components/CategoryBlock";

export default function CategoryBlocks() {
  return (
    <>
      {
        computerCategories.map((obj)=>(
          <div className={styles.content}>
            <Link href={`/laptops/${obj.category}`} key={obj.title}>
              
              <PcCategoryBlock src={obj.imageSrc} title={obj.title} />
           
          </Link>
          
          </div>
          
        ))
      }
    </>
  );
}
