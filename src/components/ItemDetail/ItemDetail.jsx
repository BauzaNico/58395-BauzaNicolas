import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ itemSelected }) => {
  const [count, setCount] = useState(0); //este seria el contador del carrito
  const stock = 5;
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  const handleNavigation = () => {
    navigate("/cart");
  };

  const addToCart = () => {
    addItem(itemSelected, count);
  };

  return (
    <div className="">
      <img
        src={itemSelected?.image}
        alt={itemSelected?.title}
        style={{ width: "100px", height: "100px" }}
      />
      <div>
        <h3>{itemSelected?.title}</h3>
        <p>{itemSelected?.description}</p>
      </div>
      <strong> Unidades disponibles: {stock}</strong>
      <h5>${itemSelected?.price}</h5>
      <div>
        <button onClick={handleNavigation}>Terminar la compra</button>
        <button onClick={addToCart}>Agregar al carrito</button>
      </div>
      <ItemCount count={count} setCount={setCount} stock={stock} />
    </div>
  );
};

export default ItemDetail;
