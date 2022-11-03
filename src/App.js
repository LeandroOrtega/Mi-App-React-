import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import "./App.css";
function App() {
  return (
    <>
      <NavBar />
      <ItemsListContainer
        nombre="Tienda oficial del Club Atlético River Plate, encontrá lo que tanto buscás

La mejor indumentaria para niños,damas y hombres, regalos, accesorios y más.."
      />
    </>
  );
}

export default App;
