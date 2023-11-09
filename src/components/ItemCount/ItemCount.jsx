import { useRef, useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0); //este seria el contador del carrito

  const renderCount = useRef(20); //Esto seria el stock disponible

  const onAdd = () => {
    setCount(count + 1);
    renderCount.current--;
  };

  const onSubstract = () => {
    setCount(count - 1);
    renderCount.current++;
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
      <h5>Stock disponible: {renderCount.current}</h5>
      <button type="button" className="btn btn-sm btn-success" onClick={onAdd}>
        +
      </button>
      <div>
        <button type="button" className="btn btn-info">
          Agregar al carrito {count}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
