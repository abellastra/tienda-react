import { Item } from "../Item/Item";

export const ItemDetail = ({detail }) => {
  console.log(detail)
  return (
    <Item {...detail}>
      <button>enviar al carrito</button>
    </Item>
  );
};
