import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const categoria1 = "Paletas";
  const categoria2 = "Zapatillas";
  const categoria3 = "Outfit";
  const categoria4 = "Accesorios";

  return (
    <>
      <NavBar />
      <ItemListContainer
        categoria1={categoria1}
        categoria2={categoria2}
        categoria3={categoria3}
        categoria4={categoria4}
      />
    </>
  );
}

export default App;
