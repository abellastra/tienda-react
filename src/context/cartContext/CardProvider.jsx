import { useState } from "react";
import { CardContext } from "./CardContext";

export const CardProvider = ({ children }) => {
  const [card, setCard] = useState();
  const exist = (id) => {
    const exist = card.some((p = p.id === id));
    return;
  };
  const addItem = (item) => {
    if (exist(item.id)) {
      alert("El producto ya existe en el carrito");
      return;
    }
    setCard(...card, item);
    alert(`${item.name} agregado`);
  };
  const clearCard = () => {
    setCard([]);
  };

  const getTotalItems = () => {
    if (card.length) {
      return card.length;
    }
  };

  const values = {
    card,
    addItem,
    clearCard,
    getTotalItems,
  };

  return <CardContext.Provider value={{values}}>{children}</CardContext.Provider>;
};
