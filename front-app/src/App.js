import MainPage from "./Components/MainPage/MainPageAll";
import { Route, Routes } from "react-router-dom";
import MainProducto from "./Components/ProductDescription/MainProducto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MainPage/>}/>
        <Route path='/Producto' element={<MainProducto/>}/>
      </Routes>
    </div>
  );
}

export default App;
