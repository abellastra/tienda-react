import { Item } from "../Item/Item";
import { useCardContext } from "../../context/cartContext/useCardContx";
export const ItemDetail = ({detail }) => {
  const { addItem } = useCardContext();
  console.log(detail)
  return (
    <Item {...detail}>
      <button onClick={()=>addItem(detail)}>enviar al carrito</button>
    </Item>
  );
};
