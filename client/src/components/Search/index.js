import React, { useState } from "react";
import api from "../../utils/api";
import api2 from "../../utils/api_2";


function Search (props){

const [books, setBooks] = useState([])
function  handleSubmit(event) { 
    event.preventDefault();
    const query = event.target["book"].value
     api.search(query).then (res => {
      setBooks(res.data.items)
     console.log(res.data.items)}
 )
  .catch(err => console.log(err));
}

function saveBook (book) {
  api2.saveBook(
  {  title:book.volumeInfo.title, 
     author: book.volumeInfo.authors[0],
     info: book.volumeInfo.description,
     image: book.volumeInfo.imageLinks.smallThumbnail,
     bookLink: book.volumeInfo.infoLink,
  }) .then(res => console.log("Success"))
    .catch(err => console.log(err));
}

return (
<div>
<div className="row pl-3">
 
 <div className="col-md-6">

    <form id="searchForm" onSubmit={handleSubmit}>
        <p><b>Book Search</b></p>
    <input
      name="book"
      placeholder="Find Book (required)"
    />
    &nbsp; &nbsp;
    <input type="submit" class="btn btn-danger"  value="Submit"/>
    </form>
<br/>
<br/>
<br/>
    </div>
  
    </div>



 {books.length? books.map((book)=> (
   <div>
   {book.volumeInfo.authors&&book.volumeInfo.imageLinks? (
   <div className="row p-3 mb-5 border mx-1">
     
  <div className="col-12">
  
   <div className="row justify-content-between">
     <div className="col-4">{book.volumeInfo.title}</div>
     <div className="col-2">
     <a href={book.volumeInfo.infoLink} target="blank"><input type="submit" class="btn btn-danger" value="View"/></a> 
      &nbsp; &nbsp;
     <input type="submit" class="btn btn-danger" onClick={() => saveBook(book)} value="Save"/>
     </div>
   </div>
  
   <div className="row pl-3">
   {book.volumeInfo.authors? book.volumeInfo.authors[0]:null }
  </div>

   <div className="row">
     <div className="col-1 pl-3"> 
     <img alt={book.volumeInfo.title} className="img-fluid" src={book.volumeInfo.imageLinks?book.volumeInfo.imageLinks.smallThumbnail:null}/></div> 
     <div className="col-11">{book.volumeInfo.description}</div>   
   </div>
   
   </div>
  </div>
 ):null}
 </div>
 )):null

}

 

</div>
);
}

export default Search;