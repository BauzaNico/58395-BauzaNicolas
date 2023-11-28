import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemdetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";
import ThemeProvider from "./context/ThemeProvider";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
