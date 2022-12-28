import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";

import ItemList from "./components/item/ItemList";
import CartWidget from "./components/CartWidget/CartWidget";

// import CartWidget from "./components/CartWidget/CartWidget";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemsListContainer />} />
        <Route path="detail/:id" element={<ItemList />} />
        <Route path="category/:categoryName" element={<ItemsListContainer />} />
        <Route path="carrito" element={<CartWidget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
