"use client";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import Popular from "@/components/Popular/Popular";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { log } from "console";

export default function PcLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbItems = [
    { text: 'Главная', href: '/' },
    { text: 'Компьютеры и комплектующие', href: '/laptops' },
    
  ];


 
 

  return (
    <>
     <Breadcrumbs items={breadcrumbItems}/>
      <main className={styles.main}>
      
        {children}</main>
      <Popular numItemsToShow={5} />
    </>
  );
}
