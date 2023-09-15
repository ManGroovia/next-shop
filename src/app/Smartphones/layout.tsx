"use client";
import styles from "../computers/styles.module.scss";

import Popular from "@/components/Popular/Popular";


export default function PcLayout({ children }: { children: React.ReactNode }) {


  
 


 
 

  return (
    <>
    
      <main className={styles.main}>
      
        {children}</main>
      <Popular numItemsToShow={5} />
    </>
  );
}
