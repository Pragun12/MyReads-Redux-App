import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import {Provider} from 'react-redux';
import store from './store';

class BooksApp extends React.Component {
  state = {
   
    showSearchPage: false
  }

  gotoSearchBooks(){
    this.setState({
      showSearchPage:true
    })
  }

  gotoBookList(){

    this.setState({
      showSearchPage:false
    })
  }

  render() {
    return (
      <Provider store={store}>
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks displayBookList={this.gotoBookList.bind(this)} />
        ) : (
          <ListBooks searchBooks={this.gotoSearchBooks.bind(this)} />
    )
  }
     </div>
     </Provider>
    )
}
  }

export default BooksApp
