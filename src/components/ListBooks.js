import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAll} from '../actions/bookAction' ;
import Book from './Book';

class ListBooks extends Component {


  constructor(){
    super();
    this.state={
      currentlyReading:[],
      read:[],
      wantToRead:[]
    }
  }
  componentWillMount(){
    this.props.getAll();
   
  }

  onSave(){
 
    this.props.getAll();
    }

  componentWillReceiveProps(props){
    
    this.setState({
      currentlyReading:props.shelfs.currentlyReading,
      read:props.shelfs.read,
      wantToRead:props.shelfs.wantToRead
    })
     
    

  }
  
    searchBooks(){
        this.props.searchBooks();
     }
    
    render(){

      let c_shelf='';
    if(this.state.currentlyReading.length){
      c_shelf=this.state.currentlyReading.map(book=>{
        return(
        <li key={book.id} id={book.id}>
                  
                <Book book={book} category={book.shelf} onSave={this.onSave.bind(this)}/>
                  
                 
            </li>
        )

      })

    }

    let r_shelf='';
    if(this.state.read.length){
      r_shelf=this.state.read.map(book=>{
        return(
        <li key={book.id} id={book.id}>
                  
                <Book book={book} category={book.shelf} onSave={this.onSave.bind(this)} />
                  
                 
            </li>
        )

      })

    }


    let w_shelf='';
    if(this.state.wantToRead.length){
      w_shelf=this.state.wantToRead.map(book=>{
        return(
        <li key={book.id} id={book.id}>
                  
                <Book book={book} category={book.shelf} onSave={this.onSave.bind(this)}/>
                  
                 
            </li>
        )

      })

    }
    
    

        return(

            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                   {c_shelf}
                    </ol>
                    </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {w_shelf}
                           
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {r_shelf}
                   
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={this.searchBooks.bind(this)}>Search book</a>
            </div>
          </div>
        )
    }
}

const mapStateToProps=state=>({
 
  shelfs:state.books.shelf
});

export default connect(mapStateToProps,{getAll})(ListBooks);
