"use client";
import styles from "../laptops/styles.module.scss";

import Popular from "@/components/Popular/Popular";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";


export default function PcLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbItems = [
    { text: 'Главная', href: '/' },
    { text: 'Смартфоны', href: '/Smartphones' },
    
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
