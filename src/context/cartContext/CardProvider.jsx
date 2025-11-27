import { useState } from "react";
import { CardContext } from "./CardContext";

export const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  const exist = (id) => {
    const exist = card.some((p) => p.id === id);
    return exist;
  };

  const addItem = (item) => {
    if (exist(item.id)) {
      const upDatedCard = card.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });

      setCard(upDatedCard);
      alert("product add");
    } else {
      setCard([...card, item]);
      alert(`${item.name}agregado`);
    }
  };

  const deleteItem = (id) => {
    const filtered = card.filter((p) => p.id !== id);
    setCard(filtered);
    alert("producto eliminado");
  };

  const clearCard = () => {
    setCard([]);
  };

  const getTotalItems = () => {
    const totalItems = card.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };

  const total = () => {
    const total = card.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return Math.round(total * 100) / 100;
  };
  const chechout = () => {
    const ok = confirm("¿quieres finalizar a compra ?");
    clearCard();
  };
  const value = {
    card,
    addItem,
    clearCard,
    getTotalItems,
    deleteItem,
    total,
    chechout,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
