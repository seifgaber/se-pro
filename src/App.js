
import './App.css';
import Navbar from "./components/navbar";
import Slider from './components/slider';
import Productlist from './components/product_ist';
import {  Routes, Route } from "react-router-dom";
import About from './components/About';
import Productdetails from './components/Productdetails';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={
          <>
            <Slider />
      <Productlist />  
      </>
    }/>
    <Route path="about" element={< About/>}/>
    <Route path="product/:productId" element={<Productdetails/>}/>
        </Routes>
      
    </>
  );
}


export default App;
