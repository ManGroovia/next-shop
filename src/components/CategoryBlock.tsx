import Image from "next/image"
interface ICategoryBlock{
    src: string;
    title:string;
}
export default function CategoryBlock({src, title}: ICategoryBlock){
    return(
        <>
        <div className="kategory">
            <Image src={src} alt="img"  width={136} height={136} />
            <p>{title}</p>
        </div>
        </>
    )
}