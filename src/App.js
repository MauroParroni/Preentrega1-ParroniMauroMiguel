import "./App.css";
import NavBar from "./components/NavbarComponent/NavBarComponent";
import ItemListContainer from "./components/itemListComponent/itemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailComponent from "./components/itemDetailContainer/itemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={< ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={< ItemListContainer/>}/>
        <Route path="*" element={ <h1> Page not found: 404 </h1>}/>
        <Route path="/product/:id" element={<ItemDetailComponent />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
