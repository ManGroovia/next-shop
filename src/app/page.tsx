"use client";
<<<<<<< HEAD
import ItemBlock from "@/components/ItemBlock/ItemBlock";
import Brands from "@/components/Brands";
import Companies from "@/components/Companies";
export default function Home() {
  return (
    <>
      <div className="home">
        <div className="title">
          <h3>Категории</h3>
        </div>
        <div className="kategoryes">
          <div className="kategory">
            <img src="kategory/phone.svg" alt="" />
            <p>Смартфоны</p>
          </div>
          <div className="kategory">
            <img src="/kategory/laptop.svg" alt="" />
            <p>Компьютеры и ноутбуки</p>
          </div>
          <div className="kategory">
            <img src="/kategory/tv.svg" alt="" />
            <p>Телевизоры</p>
          </div>
          <div className="kategory">
            <img src="/kategory/watch.svg" alt="" />
            <p>Умные часы</p>
          </div>
          <div className="kategory">
            <img src="/kategory/airpods.svg" alt="" />
            <p>Наушники</p>
          </div>
          <div className="kategory">
            <img src="/kategory/conder.svg" alt="" />
            <p>Кондиционеры</p>
          </div>
          <div className="kategory">
            <img src="/kategory/freez.svg" alt="" />
            <p>Холодильники</p>
          </div>
          <div className="kategory">
            <img src="/kategory/wash.svg" alt="" />
            <p>Стиральные машины</p>
          </div>
        </div>
        <button className="more">Показать больше</button>
      </div>
      <div className="topsell">
        <div className="topsell-title">
          <h3>Популярные</h3>
        </div>

        <ItemBlock />
        <Brands/>
        <Companies/>
      </div>
=======
import Popular from "@/components/Popular/Popular";
import Brands from "@/components/Brands";
import Companies from "@/components/Companies";
import Categories from "@/components/Categories";


import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.1 }}
          >
           
            <Categories numItemsToShow={8} />

            <Popular numItemsToShow={10} />
            <div className="info_brands">
              <Brands />
              <Companies />
            </div>
          </motion.div>
        </AnimatePresence>
      
>>>>>>> master
    </>
  );
}
