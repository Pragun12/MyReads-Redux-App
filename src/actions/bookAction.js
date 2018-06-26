import {SEARCH_BOOKS,UPDATE_SHELF,ORGANIZE_SHELF} from './types';

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll=()=>dispatch=>{
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data =>{

      let c=[];
      let w=[];
      let r=[];
    
      for(let book of data.books){
       if(book.shelf==='currentlyReading'){
        c.push(book);
      }
      else if(book.shelf==='read'){
        r.push(book);
      }
      else if(book.shelf==='wantToRead'){
       w.push(book);
    
      }
    
    }

    let bookshelf={
      currentlyReading:c,
      read:r,
      wantToRead:w
    }
    dispatch({
      type:ORGANIZE_SHELF,
       payload:bookshelf
    })

    })
}

export const updateShelf=(book,shelf)=>dispatch=>{
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())
  .then(data=>dispatch({
    type:UPDATE_SHELF,
    payload:data
}));
}

export const searchBooks=(query)=>dispatch=>{



    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      }).then(res => res.json())
        .then(data =>dispatch({
            type:SEARCH_BOOKS,
            payload:data.books
        }));
    
      
}

export const organizeInShelf=(books)=>dispatch=>{
  
  let c=[];
  let w=[];
  let r=[];

  for(let book of books){
   if(book.shelf==='currentlyReading'){
    c.push(book);
  }
  else if(book.shelf==='read'){
    r.push(book);
  }
  else if(book.shelf==='wantToRead'){
   w.push(book);

  }

}
 
let data={
  currentlyReading:c,
  read:r,
  wantToRead:w
}

dispatch({
  type:ORGANIZE_SHELF,
   payload:data
})


}