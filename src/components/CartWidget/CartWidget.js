import "../../App.css";

const CartWidget = () => {
  let contador = 0;

  return (
    <button type="button" className="btn">
      <i id="cartWidget" className="fi fi-sr-cart-shopping-fast">
        <b className="contadorCartWidget">{contador}</b>
      </i>
    </button>
  );
};

export default CartWidget;
