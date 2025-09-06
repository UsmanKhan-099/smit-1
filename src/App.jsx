import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login"
import {Products} from "./pages/Products"
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";


function App() {
  
  return (
    <>
    
     <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/*" element={<PageNotFound />}/>
     </Routes>
    </>
  );
}

export default App;
