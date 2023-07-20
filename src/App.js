import "./App.css";
import NavBar from "./components/NavbarComponent/NavBarComponent";
import ItemList from "./components/itemListComponent/itemListComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailComponent from "./components/itemDetailContainer/itemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemList prop="¡Hola, bienvenido a Vapor Verde!" />}/>
        <Route path="/category/:categoryId" element={<ItemList prop="¡Hola, bienvenido a Vapor Verde!" />}/>
        <Route path="*" element={ <h1> Page not found: 404 </h1>}/>
        <Route path="/product/:id" element={<ItemDetailComponent />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
