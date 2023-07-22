import Link from "next/link"
import categories from '../assets/categories.json'
import Image from "next/image"
import CategoryBlock from "./CategoryBlock"

export default function Categories(){


    return(
        <>
        
      <div className="home">
        <div className="title">
          <h3>Категории</h3>
        </div>
        <div className="kategoryes">
        {categories.map((obj) => (
            <Link href={`/${obj.category}`} key={obj.title}>
              
                <CategoryBlock src={obj.imageSrc} title={obj.title} />
             
            </Link>
          ))}
        </div>
        <button className="more">Показать больше</button>
      </div>
        </>
    )
}