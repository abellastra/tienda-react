import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./componets/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componets/ItemDetailContainer/ItemDetailContainer";
import { CardProvider } from "./context/cartContext/CardProvider";
import { Cart } from "./componets/Cart/Cart";
import { Header } from "./componets/header/Header";
import { MainLayout } from "./layouts/MiniLayout";
import { Rutaprotegida } from "./componets/RutaProtegida/RutaProtegida";
import { ProductFromContainer } from "./componets/adminComponents/ProductFromContainer/ProductFromContainer";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from "./componets/Login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <CardProvider>
          <Header />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route
                path={"/category/:category"}
                element={<ItemListContainer titulo={"Bienvenidos"} />}
              />
              <Route path={"/detail/:id"} element={<ItemDetailContainer />} />
              <Route path={"/carrito"} element={<Cart />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route
                path={"alta-productos"}
                element={
                  <Rutaprotegida>
                    <ProductFromContainer />
                  </Rutaprotegida>
                }
              />
            </Route>
          </Routes>
        </CardProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
