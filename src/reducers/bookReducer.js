import {SEARCH_BOOKS,UPDATE_SHELF,ORGANIZE_SHELF} from '../actions/types';

const initialState={
    booklist:[],
    book:{},
    updatelist:[],
    shelf:{}
}

export default function(state=initialState,action){

    switch(action.type){
        case SEARCH_BOOKS:
        return {
            ...state,
           booklist:action.payload
        }
        case UPDATE_SHELF:
        return{
            ...state,
            updatelist:action.payload
        }
       
        case ORGANIZE_SHELF:
        return{
            ...state,
            shelf:action.payload
        }


        default:
        return state;
    }
}