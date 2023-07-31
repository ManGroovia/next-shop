"use client";
import styles from "./styles.module.scss";
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import Popular from "@/components/Popular/Popular";
import popular from "../../assets/popular.json";

export default function PcLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <Popular numItemsToShow={5} />
    </>
  );
}
