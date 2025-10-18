import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  console.log(typeof id);
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res) {
          throw new Error("no se encontro el producto");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((prod) => prod.id === id);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("no se encontro el producto");
        }
      })
      .catch((erro) => {
        console.error(erro);
      });
  }, [id]);
  console.log(Object.keys(detail).length);
  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>cargando...</p>
      )}
    </main>
  );
};
