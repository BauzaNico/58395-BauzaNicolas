import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsQuantity, setProductsQuanity] = useState(0);

  const addItem = (product, quantity) => {
    setProducts([...products, { ...product, quantity }]);
  };

  useEffect(() => {
    setProductsQuanity(
      products.reduce((acc, product) => acc + product.quantity, 0),
      0
    );
  }, [products]);

  return (
    <CartContext.Provider value={{ products, addItem, productsQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
