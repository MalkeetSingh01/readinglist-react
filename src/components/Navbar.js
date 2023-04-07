import { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

const Navbar = () => {
    const {books}=useContext(BookContext);
    const style={
        width: "50vw",
        textAlign: 'center',
        color: 'white',
        margin: '30px auto',
        padding: '10px',
    }
    return ( 
        <div className="Navbar" style={style}>
            <h1>
                Ninja Reading List
            </h1>
            <p>Current number of Books {books.length} </p>
        </div>
     );
}
 
export default Navbar;