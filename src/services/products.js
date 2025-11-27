const BASE_URL = "https://692095db31e684d7bfcd9050.mockapi.io/products";

export const createProducts = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("nose pudo creearel producto ");
  }
  const result = await res.json();
  return result;
};
