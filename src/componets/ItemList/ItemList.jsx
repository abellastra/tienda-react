import './ItemList.css'
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
export const ItemList = ({ lista }) => {
    console.log(lista)
    lista.map((p)=>{
      console.log(p.imageUrl);

    })
  return (
    <>
      {lista.length ? (
        lista.map((prod) => (
            <Link to={`/detail/${prod.id}`} key={prod.id}>
              <Item {...prod} />
            </Link>
        ))
      ) : (
        <p>no hay producto </p>
      )}
    </>
  );
};
