import { useState } from "react";
import { ProductsFromUi } from "../ProductFromUi/ProductFromUi";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImg";
import { createProducts } from "../../../services/products";

export const ProductFromContainer = () => {
  const [loading, setLoanding] = useState();
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [resetFile, setResetFile] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit funcionando ");
    setErrors({});
    setLoanding(true);

    const newErrors = validateProduct({ ...product, file });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoanding(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb(file);
      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl,
      };

      await createProducts(productData);
      alert("producto cargado con exito");
      setProduct({ name: "", price: "", category: "", description: "" });
      setFile(null);
      setResetFile(true);
      console.log(product);
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoanding(false);
    }
  };
  return (
    <ProductsFromUi
      product={product}
      errors={errors}
      onChange={handleChange}
      onFileChage={setFile}
      loading={loading}
      onSubmit={handleSubmit}
      resetFile={resetFile}
    />
  );
};
