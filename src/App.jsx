import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/home/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/home/cart/CartCointainer";
import Navbar from "./components/layout/Navbar";
import ItemDetailContainer from "./components/pages/home/itemDetail/itemDetailContainer";
import Checkout from "./components/pages/home/checkout/Checkout";
import { CartContextProvider } from "./contex/cartContext";
import { Toaster } from "sonner";
function App() {
  return (
    <BrowserRouter>
      <Toaster duration={2000} richColors position="top-center" />
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
