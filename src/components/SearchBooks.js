import React, { Component } from 'react';
import {connect} from 'react-redux';
import {searchBooks} from '../actions/bookAction' ;
import Book from './Book'

class SearchBooks extends Component {

    displayBookList(){
        this.props.displayBookList();
    }

    onAutoComplete(e){
     let inpt=e.target.value;

     let checkForWhiteSpace=inpt.replace(/ /g,'');
    
       
     if(checkForWhiteSpace.length!==0){
      this.props.searchBooks(inpt);
     }

     }
    

    render(){

      let books_result='';
       
      let bookArry=this.props.books;
        
          if(this.props.books.error){
            books_result='Result Not Found';
          }
          else{
          books_result=bookArry.map(book=>{
            let cat='none';
             
            return(
              <li key={book.id} id={book.id}>
                  
                <Book book={book} category={cat} />
                  
                 
            </li>
          )


          })
       
        }

    return(

        <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.displayBookList.bind(this)}>Close</a>
          <div className="search-books-input-wrapper">
           
            <input type="text" onKeyUp={this.onAutoComplete.bind(this)} placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
         {books_result}
          </ol>
        </div>
      </div>
    )
}
}

const mapStateToProps=state=>({
  books:state.books.booklist
});

export default connect(mapStateToProps,{searchBooks}) (SearchBooks);