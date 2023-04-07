import { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

const BookDetails = ({book}) => {
    const {removeBook}=useContext(BookContext);
    const style={
        color:"white",
        listStyle: 'none',
        padding: '10px',
        margin: '2px',
    }
    return ( 
       <li onClick={()=>removeBook(book.id)} className="book" style={style}>
         <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
       </li>
     );
}
 
export default BookDetails;