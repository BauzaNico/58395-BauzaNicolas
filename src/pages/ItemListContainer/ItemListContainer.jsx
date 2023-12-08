import { ThemeContext } from "../../context/ThemeContext";
import ItemList from "../../components/ItemList/ItemList";
import { useContext } from "react";

const ItemListContainer = () => {
  const colorTheme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: colorTheme.theme === "ligth" ? "white" : "grey",
        padding: "20px",
      }}
    >
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
