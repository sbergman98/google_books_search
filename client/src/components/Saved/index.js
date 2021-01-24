import React, { useState, useEffect } from "react";
import api2 from "../../utils/api_2";

function Saved () {

const [books, setBooks] = useState([])
useEffect(() => {
    loadBooks()
  }, [])
  function loadBooks() {
    api2.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
      api2.deleteBook(id)
      .then(res => 
        loadBooks()
      )
      .catch(err => console.log(err));
  };  

  return(
      <div>
          {books.length? books.map((book)=> (
   <div>
   {book.author&&book.image? (
   <div className="row p-3 mb-5 border mx-1">
     
  <div className="col-12">
  
   <div className="row justify-content-between">
     <div className="col-4">{book.title}</div>
     <div className="col-2">
     <a href={book.bookLink} target="blank"><input type="submit" class="btn btn-danger" value="View"/></a> 
      &nbsp; &nbsp;
     <input type="submit" class="btn btn-danger" onClick={() => deleteBook(book._id)} value="Delete"/>
     </div>
   </div>
  
   <div className="row pl-3">
   {book.author? book.author:null }
  </div>

   <div className="row">
     <div className="col-1 pl-3"> 
     <img alt={book.title} className="img-fluid" src={book.image?book.image:null}/></div> 
     <div className="col-11">{book.description}</div>   
   </div>
   
   </div>
  </div>
 ):null}
 </div>
 )):null

}
      </div>
  )
}

export default Saved;