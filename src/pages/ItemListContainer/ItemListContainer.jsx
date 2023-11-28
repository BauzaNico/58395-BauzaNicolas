import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import { ThemeContext } from "../../context/ThemeContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const ItemListContainer = () => {
  const colorTheme = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const fetchProducts = fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err));

  useEffect(() => {
    const filteredProducts = async () => {
      if (id) {
        const filteredCategory = await fetchProducts.then((productList) => {
          return productList.filter((products) => {
            const allCategory = id.includes("_") ? id.replace("_", " ") : id;
            return products.category === allCategory;
          });
        });
        console.log(filteredCategory);
        setItems(filteredCategory);
      } else {
        setItems(fetchProducts);
      }
    };
    filteredProducts();
  }, [id]);

  if (items.length > 0)
    return (
      <div
        style={{
          backgroundColor: colorTheme.theme === "dark" ? "gray" : "white",
        }}
      >
        <ItemCount />
        <ItemList items={items} />
      </div>
    );
};

export default ItemListContainer;
