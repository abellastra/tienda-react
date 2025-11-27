import { useRef, useEffect } from "react";
export const ProductsFromUi = ({
  product,
  errors,
  loading,
  onChange,
  onFileChage,
  onSubmit,
  resetFile,
}) => {
  const fileInputRef = useRef();

  useEffect(() => {
    if (resetFile && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [resetFile]);
  return (
    <section className="section-form">
      <form onSubmit={onSubmit} className="form-container">
        <h1>add product</h1>

        <div className="form-group">
          <label htmlFor="input1" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            id="input1"
            value={product.name}
            onChange={onChange}
            required
            className="form-input"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="input2" className="form-label">
            Precio:
          </label>
          <input
            type="number"
            name="price"
            id="input2"
            value={product.price}
            onChange={onChange}
            required
            className="form-input"
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Categoria:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
            required
            className="form-input"
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="textarea" className="form-label">
            Descripción:
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
            required
            id="textarea"
            className="form-input"
          ></textarea>
          {errors.descriptio && <p className="error">{errors.descriptio}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Imagen:</label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => onFileChage(e.target.files?.[0] ?? null)}
            className="form-button"
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        <button
          type="submit"
          onClick={() => fileInputRef()}
          disabled={loading}
          className="form-button"
        >
          {loading ? "guardando..." : "guardar"}
        </button>
      </form>
    </section>
  );
};
