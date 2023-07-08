import './App.css';
import NavBar from './components/NavbarComponent/NavBar';
import ItemList from './components/itemListComponent/itemList'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList prop="¡Hola, bienvenido a Vapor Verde!" />
    </div>
  );
}

export default App;
