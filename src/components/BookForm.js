import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContextProvider";

const BookForm = () => {
    // const {addBook}=useContext(BookContext);
    const {dispatch}=useContext(BookContext);

    const [data,setData]=useState({})
    const handle=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        if(data.title!==" "){
            // addBook(data);
            dispatch({type:'ADD_BOOK',book:{
                title:data.title,
                author:data.author
            }})
        }
        setData({title:"",author:""});
    }
    return ( 
        <form className="formDiv" onSubmit={submitForm}>
            <input type="text" placeholder="Title" value={data.title} name="title" onChange={handle} required></input>
            <input type="text" placeholder="Author" value={data.author} name="author" onChange={handle} required></input>
            <button type="submit">Add Book</button>
        </form>
     );
}
 
export default BookForm;