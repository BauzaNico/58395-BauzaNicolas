import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [itemSelected, setItemSelected] = useState([null]);
  const { id } = useParams();

  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setItemSelected(product);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {id && (
        <div>
          <ItemDetail itemSelected={itemSelected} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
