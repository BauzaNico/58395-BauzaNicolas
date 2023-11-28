const ItemCount = ({ stock, count, setCount }) => {
  const onAdd = () => {
    if (count === stock) return;
    setCount(count + 1);
  };

  const onSubstract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-warning"
        onClick={onSubstract}
      >
        -
      </button>
      <button type="button" className="btn btn-info">
        {count}
      </button>
      {count === stock ? null : (
        <button
          type="button"
          className="btn btn-sm btn-success"
          onClick={onAdd}
        >
          +
        </button>
      )}
      <div></div>
    </div>
  );
};

export default ItemCount;
