
import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import {Nav} from "./componets/Nav/Nav"
import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './componets/ItemDetailContainer/ItemDetailContainer'
import { CardProvider } from './context/cartContext/CardProvider'
function App() {
  return (
    <>
      <BrowserRouter>
        <CardProvider>
          <Nav />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/detail/:id"} element={<ItemDetailContainer />} />
          </Routes>
        </CardProvider>
      </BrowserRouter>
    </>
  );
}

export default App
