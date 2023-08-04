import categories from "../../assets/categories.json";
import React from 'react'
export default function KatalogModal(){
    
    return(
        <>
        <div className="katalog_wrapper">
            <div className="katalog_left">
                <ul>
                    {
                        categories.map((category)=>(
                            <div className="katalog_name">
                                <li key={category.id}>{category.title}</li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
        </>
    )
}