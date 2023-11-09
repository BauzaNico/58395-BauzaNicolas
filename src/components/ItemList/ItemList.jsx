import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <Link key={item.id} to={"/item/" + item.id}>
            <Item
              title={item.title}
              description={item.description}
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
