import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsQuantity, setProductsQuanity] = useState(0);

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      const newProducts = products.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setProducts(newProducts);
    } else {
      setProducts([...products, { ...product, quantity }]);
    }
  };

  const removeProduct = (productId) => {
    setProducts(products.filter((prod) => prod.id !== productId));
  };
  const clearCart = () => {
    setProducts([]);
  };

  const isInCart = (id) => {
    return products.some((item) => item.id == id);
  };

  useEffect(() => {
    setProductsQuanity(
      products.reduce((acc, product) => acc + product.quantity, 0),
      0
    );
  }, [products]);

  return (
    <CartContext.Provider
      value={{ products, addItem, removeProduct, productsQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
