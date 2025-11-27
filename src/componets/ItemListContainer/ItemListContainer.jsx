import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    fetch("https://692095db31e684d7bfcd9050.mockapi.io/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("hubo un problema al buascar productos");
        }
        return res.json();
      })
      .then((data) => {
        if (category) {
          setProducts(data.filter((prod) => prod.category === category));
        } else {
          setProducts(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);
  return (
    <>
      <h1>bienvenda</h1>

      <section>
        <ItemList lista={products} />
      </section>
    </>
  );
};
