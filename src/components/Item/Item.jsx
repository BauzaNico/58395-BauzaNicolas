import "./itemStyle.css";

const Item = ({
  title,
  price,
  description,
  image,
  quantity,
  action,
  button,
}) => {
  return (
    <div className="cardItem">
      <img alt={title} src={image} />

      <div>
        <h3>{title}</h3>
      </div>
      <h6>${price}</h6>
      {action && button && (
        <button className="btn" onClick={() => action()}>
          {button}
        </button>
      )}
      {quantity && <span>Cantidad: {quantity}</span>}
    </div>
  );
};

export default Item;
