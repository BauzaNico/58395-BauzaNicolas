import { useContext } from "react";
import "../../App.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { productsQuantity } = useContext(CartContext);

  return (
    <button type="button" className="btn">
      <i id="cartWidget" className="fi fi-sr-cart-shopping-fast">
        <b className="contadorCartWidget">{productsQuantity}</b>
      </i>
    </button>
  );
};

export default CartWidget;
