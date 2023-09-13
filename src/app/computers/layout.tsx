"use client";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import Popular from "@/components/Popular/Popular";
import { log } from "console";
import { usePathname, useSearchParams } from 'next/navigation'
export default function PcLayout({ children }: { children: React.ReactNode }) {
  
 
 
 
 
 

  return (
    <>
     
      <main className={styles.main}>
      
        {children}</main>
      <Popular numItemsToShow={5} />
    </>
  );
}
