import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

import './ItemListContainer.css'
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
    .then((res) => {
        if(!res.ok){
            throw new Error('hubo un problema al buascar productos')
        }
        return res.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => {
        console.error(err)
      });
  }, []);
  return (
    <>
      <h1>bienvenda</h1>

      <section>
        <ItemList lista={products} />
      </section>
    </>
  );
};
