import { Item } from "../Item/Item";
import { useCardContext } from "../../context/cartContext/useCardContx";
import { Count } from "../Count/Count";
export const ItemDetail = ({ detail }) => {
  const { addItem } = useCardContext();

  const handleAdd=(quantity)=>{
    addItem({...detail, quantity})
  }
  return (
    <Item {...detail}>
      <Count btnText={"add acarrito " } onConfirm={handleAdd}></Count>
      {/* <button onClick={() => addItem(detail)}>enviar al carrito</button> */}
    </Item>
  );
};
