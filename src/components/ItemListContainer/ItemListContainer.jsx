const ItemListContainer = ({
  categoria1,
  categoria2,
  categoria3,
  categoria4,
}) => {
  return (
    <section id="sectionCategorias">
      <div className="list-group list-group-horizontal">
        <a href="#" className="list-group-item">
          {categoria1}
        </a>
        <a href="#" className="list-group-item">
          {categoria2}
        </a>
        <a href="#" className="list-group-item">
          {categoria3}
        </a>
        <a href="#" className="list-group-item">
          {categoria4}
        </a>
      </div>
    </section>
  );
};

export default ItemListContainer;
