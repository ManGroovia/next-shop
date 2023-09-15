import Image from "next/image"

interface ICategoryBlock{
    src: string;
    title:string;
    
}
export default function PcCategoryBlock({src, title}: ICategoryBlock){
    return(
        <>
        <div className="pc_categories">
        <div className="pc_category_block">
        <Image src={src} alt="img" width={208} height={168}/>
        <p>{title}</p>
        </div>
        </div>
        </>
    )
}