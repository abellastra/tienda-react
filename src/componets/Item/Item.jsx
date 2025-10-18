import './Item.css'
export const Item = ({ name, price, description, imageUrl, children }) => {
  console.log(imageUrl);
  return (
    <article className="product-item">
      <img className="productImg" src={imageUrl} alt="product-item" />
      <h2 className="product-detail">{name}</h2>
      <p>precio:{price}</p>
      <p>descripcion: {description}</p>
      {children}
    </article>
  );
};