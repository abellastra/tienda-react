import { useCardContext } from "../../context/cartContext/useCardContx";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./Cart.css";
export const Cart = () => {
  const { card, clearCard, deleteItem, total, chechout } = useCardContext();
  return (
    <section className="item-list-container">
      <h2>carrito de compras</h2>

      {card.length ? (
        card.map((prod: any) => (
          <Item key={prod.id} {...prod}>
            <samp>cantidad: {prod.quantity}</samp>
            <button className="btn" onClick={() => deleteItem(prod.id)}>
              Eliminar
            </button>
          </Item>
        ))
      ) : (
        <p>tu carrito eesta vacio</p>
      )}

      {card.length ? (
        <div className="btn-container">
          <div className="total-pagar">
            <p>total a pagar:${total()}</p>

            <button className="btn" onClick={chechout}>
              {" "}
              Finalizar compra
            </button>
            <button className="btn" onClick={clearCard}>
              {" "}
              Vaciar carrito{" "}
            </button>
          </div>
        </div>
      ) : (
        <Link to={"/"}>Volver al inicio </Link>
      )}
    </section>
  );
};
