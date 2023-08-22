import React, { createContext, useState } from "react";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import RealBody from "./Components/RealBody";
import Data from "./Data";
import See from "./Components/See";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";



// const Ctx = createContext();
function App() {

//  const[get,setGet] = useState(0);
 const [cartItems,setCartItems] = useState([]);
 

 const {products} = Data;
  // console.log(products);
  

 const onAdd = (pro)=>{
   const exist = cartItems.find((x)=> x.id===pro.id);
   if(exist)
   {
     const newItems = cartItems.map((x)=>
        x.id===pro.id ? {...exist, qty: exist.qty+1} : x
     );
     setCartItems(newItems);
   }
   else
   {
    const newItems = [...cartItems,{...pro, qty: 1}];
    setCartItems(newItems);
   }
 }

 const onRemove = (pro) =>{
   
  const exist = cartItems.find((x)=> x.id===pro.id);
  if(exist.qty===1)
  {
    const newItems = cartItems.filter((x) => x.id !== pro.id);
    setCartItems(newItems);
  }
  else
  {
     const newItems = cartItems.map((x)=>
       x.id===pro.id ? {...exist, qty: exist.qty-1} : x
     );
     setCartItems(newItems);
  }
 }

 async function addUserHandler(userDetails)
 {

  const response = await fetch("https://react-api-cdb29-default-rtdb.firebaseio.com/userDetails.json",{
                  method: 'POST',
                  body: JSON.stringify(userDetails),
                  headers:{
                    'Content-Type': 'application/json'
                  }
  });

  //  console.log(userDetails);
 }
 

  

 
  // function dataHandler(data)
  // {
  //    setGet(data);
  // }
 
  // console.log(cartItems);

  return (
    <BrowserRouter>
    
      {/* <Ctx.Provider value={get}> */}
      {/* <Header></Header>
      <Cart 
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}/>
      <RealBody 
        product={products} 
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}/>
        <See/> */}
        <Routes>
          <Route path="/"  element={
          <>
            <Header/>
            <Cart onAdd={onAdd} onRemove={onRemove}
                cartItems={cartItems}/> 
            <RealBody product={products} onAdd={onAdd}
                onRemove={onRemove} cartItems={cartItems}/>
            <See/>
          </> }/>
      
          <Route path="/about"  element={<About/>}/>
          <Route path="/home"  element={<Home/>}/>
          <Route path="/contact"  element={<Contact onAddUser={addUserHandler}/>}/>
        </Routes>
      {/* </Ctx.Provider>  */}
    </BrowserRouter>
  );
}

export default App;
// export { Ctx };