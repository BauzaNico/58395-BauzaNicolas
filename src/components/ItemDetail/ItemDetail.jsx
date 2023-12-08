import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./ItemDetailStyle.css";

const ItemDetail = () => {
  const [itemSelected, setItemSelected] = useState([null]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const handleNavigation = () => {
    navigate("/cart");
  };

  const addToCart = () => {
    addItem(itemSelected, count);
  };

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "products", id);

    getDoc(querySnapshot)
      .then((res) => {
        setItemSelected({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div id="itemDetailContainer">
      <img src={itemSelected?.image} alt={itemSelected?.title} />
      <hr />

      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{itemSelected?.title}</h3>
          <p className="card-text">{itemSelected?.description}</p>
          <strong className="card-subtitle mb-2 text-body-secondary">
            Unidades disponibles: {itemSelected?.stock}
          </strong>

          <h5>${itemSelected?.price}</h5>
          <div>
            <button className="btn" onClick={handleNavigation}>
              Terminar la compra
            </button>
            <button className="btn" onClick={addToCart}>
              Agregar al carrito
            </button>
          </div>

          <ItemCount
            count={count}
            setCount={setCount}
            stock={itemSelected?.stock}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
