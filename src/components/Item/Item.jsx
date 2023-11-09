const Item = ({ title, price, description, image }) => {
  return (
    <div className="">
      <img
        alt={title}
        src={image}
        style={{ width: "100px", height: "100px" }}
      />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <h6>{price}</h6>
    </div>
  );
};

export default Item;
