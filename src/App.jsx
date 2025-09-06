import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login"
import {Products} from "./pages/Products"
import Register from "./pages/Register";


function App() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/products" element={<Products />}/>
     </Routes>
    </>
  );
}

export default App;
