import { createContext, useState } from "react";
import {v1} from 'uuid';

export const BookContext=createContext();

const BookContextProvider=(props)=>{
    const [books,setBooks]=useState([{title:"newtitle",author:"newauthor",id:v1()}])

    const addBook=(obj)=>{
        setBooks([...books,{title:obj.title,author:obj.author,id:v1()}])
    }
    // const [myObject, setMyObject] = useState({ prop1: 'value1', prop2: 'value2' });

    // const updateObject = (prop1, prop2) => {
    //   setMyObject(prevState => ({ ...prevState, prop1, prop2 }));
    // };
    // shorthand propety es6 but instail stae has to be d0efinde;
    const removeBook=(id)=>{
        setBooks(books.filter(book=>book.id!=id));
    }

    return(
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;