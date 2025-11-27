export const validateProduct = (products, fileRequired = true) => {
  const errors = {};

  if (!products.name.trim()) {
    errors.name = " El nombre ingresado es obligatorio";
  }
  if (!products.price || products.price <= 0) {
    errors.price = " el precio es obligatorio";
  }
  if(!products.description.trim()){
    errors.description=" la  descripcion es obligatoria"
  }
  if (!products.category.trim()) {
    errors.category = " La categori es  obligatorio";
  }
  if (fileRequired && !products.file) {
    errors.file = " deves se lecciona una img";
  }
  return errors
};
