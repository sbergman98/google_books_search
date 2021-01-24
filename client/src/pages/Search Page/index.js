import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Search from  "../../components/Search/index";

function SearchPage() {
    

    return (
    <div>
        <Jumbotron title="GOOGLE BOOKS SEARCH" subtitle="Search for and Save Books of Interest"/>
        <Search/>
    </div>
    )
  }
  
  export default SearchPage;