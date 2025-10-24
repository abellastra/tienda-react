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
  const clearCard = () => {
    setCard([]);
  };

  const getTotalItems = () => {
    if (card.length) {
      return card.length;
    }
  };

  return (
    <CardContext.Provider value={{ card, addItem, clearCard, getTotalItems }}>
      {children}
    </CardContext.Provider>
  );
};
