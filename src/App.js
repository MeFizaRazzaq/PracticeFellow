import './App.css';
import Navbar from './components/Navbar';
import Menue from './components/Menue';
import Main from './components/Main';
import Addpatientform from './components/Addpatientform';
import React,{useState} from 'react';
import {Router, Routes, Route } from "react-router-dom";

function App() {
  
  //let [productList, setProductList] = useState(product);
  const [isOpen, setIsOpen]=useState(true);
  const [hovToggle, setHovToggle] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Main");


  // Function to toggle the sidebar manually (disable hover effect)
  const handleHovToggle = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
    const hov=!hovToggle;
    setHovToggle(hov); // Disable hover functionality
  };

  return (
    <>
      <div className="d-flex">
        <Menue isOpen={isOpen} setIsOpen={setIsOpen} hovToggle={hovToggle} handleHovToggle={handleHovToggle}/>
        <div className='main'>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen}  handleHovToggle={handleHovToggle}/>
          <div className='main-content'>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Addpatientform" element={<Addpatientform />} />
            </Routes>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;


/*  const incrementQuantity=(index)=>{    let newList = [...productList];
    newList[index].quantity++;
    setProductList(newList);
  };
*/