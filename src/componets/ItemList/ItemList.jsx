import "./ItemList.css";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
export const ItemList = ({ lista }) => {
  return (
    <div className="item-list">
      {lista.length ? (
        lista.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p>no hay producto </p>
      )}
    </div>
  );
};
