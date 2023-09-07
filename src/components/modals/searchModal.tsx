import React from "react";
import { useEffect, useState } from "react";
import ItemBlock from "../ItemBlock/ItemBlock";
import Pagination from "../Pagination";


interface ModalProps {
  value: string;
  setSearchClose: () => void;
  modalContentRef: any;
}
interface Product {
  id: number | string;
  imageSrc: string;
  title: string;
  category: string;
  price: number;
  brandId: number;
  brand: string;
}

interface Category {
  id: number;
  imageSrc: string;
  title: string;
  category: string;
  subcategories?: Category[];
  products?: Product[];
}

export default function SearchModal({
  setSearchClose,
  value,
  modalContentRef,
}: ModalProps) {
  const [results, setResults] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const search = value ? `&search=${value}` : "";

  useEffect(() => {
    const apiUrl = `https://64dcc6a1e64a8525a0f71f73.mockapi.io/allProducts?page=${currentPage}&limit=5${search}`;

    fetch(apiUrl).then((res)=> res.json()).then((arr)=>{
      setResults(arr)
    })
  }, [value,currentPage]);

  return (
    <div className="modal_wrapper">
      <div ref={modalContentRef} className="modal_content">
        <div className="title_close">
          <h3>Подходящие товары</h3>
          <button onClick={setSearchClose}>X</button>
        </div>
        <div className="content_items">
          {results.map((product) => (
            <ItemBlock
              key={product.id}
              src={product.imageSrc}
              price={product.price}
              title={product.title}
              className="item-block"
            />
          ))}
        </div>
        <Pagination onChangePage={(number: number) => setCurrentPage(number)} />
      </div>
    </div>
  );
}
