const ItemDetail = ({ itemSelected }) => {
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
      <h6>{itemSelected?.price}</h6>
    </div>
  );
};

export default ItemDetail;
