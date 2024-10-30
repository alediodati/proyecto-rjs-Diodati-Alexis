import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/home/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/home/cart/CartCointainer";
import Navbar from "./components/layout/Navbar";
import ItemDetailContainer from "./components/pages/home/itemDetail/itemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />

        <Route path="/cart" element={<CartContainer />} />

        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/login" element={<h1>Login</h1>} />

        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
