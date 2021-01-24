import React, { useState, useEffect} from "react";
import Jumbotron from "../../components/Jumbotron";
import Saved from "../../components/Saved"


function SavedPage() {
   
      return (
          <div>
        
        <Jumbotron title="GOOGLE BOOKS SEARCH" subtitle="Search for and Save Books of Interest"/>
        <Saved/>

          </div>
      )
  }
  
  export default SavedPage;