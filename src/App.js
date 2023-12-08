import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemdetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";
import ThemeProvider from "./context/ThemeProvider";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDh98x2f-F4bEDvlNd4_1k-O8SsY_95A2Q",
  authDomain: "db-endless-gg.firebaseapp.com",
  projectId: "db-endless-gg",
  storageBucket: "db-endless-gg.appspot.com",
  messagingSenderId: "435851418778",
  appId: "1:435851418778:web:40334d7f40fe952d271323",
};

const app = initializeApp(firebaseConfig);
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
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
