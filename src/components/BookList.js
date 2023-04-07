import { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";
import BookDetails from "./BookDetails"

const BookList = () => {
    const {books}=useContext(BookContext);
    const style={
        width: "50vw",
        margin: '0px auto',
        backgroundColor: "rgb(113, 48, 128)"
    }
    return books.length?(  
        <div className="book-list" style={style}>
            <ul>
                {
                    books.map((book)=>{
                        return (<BookDetails key={book.id} book={book}/>)
                    })
                }
            </ul>
        </div>
    ):(
        <div className="empty" style={style}>No books to Read :)</div>
    )
}
 
export default BookList;