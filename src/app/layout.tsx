"use client";
import "./globals.scss";
import { Inter, Roboto, Raleway, Lora, Ysabeau } from "next/font/google";
import Slider from "@/components/Slider";
import Header from "@/components/header";

import Footer from "@/components/Footer";
import Katalog from "../components/modals/Katalog";
import React from "react";
import { useRef, useState, useEffect } from "react";
import SearchModal from "@/components/modals/SearchModal";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next-Store.kz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isKatalogOpen, setIsKatalogOpen] = useState(false);

  const handleKatalogButtonClick = () => {
    setIsKatalogOpen(!isKatalogOpen);
  };

  const [searchValue, setSearchValue] = React.useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false);

  function useOutsideClick(ref: React.RefObject<any>, callback: () => void) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }
  
      const handleClick = (e: MouseEvent) => handleClickOutside(e);
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref, callback]);
  }

  const modalContentRef = useRef<HTMLDivElement | null>(null);
  

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  useOutsideClick(modalContentRef, handleSearchClose);


  return (
    <html lang="en">
      <>
        <body className={roboto.className}>
          <Header
            onSearchClick={handleSearchOpen}
            onKatalogButtonClick={handleKatalogButtonClick}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            
          />
          {isSearchOpen && (
            
              <SearchModal
                value={searchValue}
                setSearchClose={handleSearchClose}
                modalContentRef={modalContentRef}
              />
            
          )}
          {isKatalogOpen && <Katalog />}

          <Slider></Slider>

          <main className="mainContent">{children}</main>

          <Footer />
        </body>
      </>
    </html>
  );
}
