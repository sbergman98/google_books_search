import React, { Component, useState } from "react";
import "./App.css";
import api from "./utils/api";
import Nav from "./components/Nav";
import Search from "./pages/Search Page/index";
import Save from "./pages/Saved Page/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
 const [books, setBooks] = useState([])
//  api.search().then (res => {
//   setBooks(res.data)
//   console.log(res.data)}
//  )
// .catch(err => console.log(err));
 
  
  return (
    <BrowserRouter>
    
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path = {"/"} component ={Search}/>
         
        <Route path = {"/saved"} component ={Save}/>
      </Switch>


    </div>

    </BrowserRouter>
  );
}


export default App;
