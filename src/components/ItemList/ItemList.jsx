import Item from "../Item/Item";
import "./ItemListStyle.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Loader from "../../components/Loader/Loader";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchProducts = () => {
    const db = getFirestore();
    const productsAll = collection(db, "products");
    const querySnapshot = id
      ? query(productsAll, where("category", "==", id))
      : productsAll;

    getDocs(querySnapshot)
      .then((response) => {
        const qItems = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(qItems);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo obtener la lista de productos.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="itemListContainer">
      {items.map((item) => {
        return (
          <Link key={item.id} to={"/item/" + item.id}>
            <Item
              title={item.title}
              // description={item.description}
              price={item.price}
              image={item.image}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
