import { useState } from "react";
import Create from "./components/Create";
import BookList from '/components/List'

function App(){
    const [books,setBooks] = useState([]);

    const createBook = (title) => {
        
        const updatedBooks = [
            ...books,
            {id:Math.random(Math.random()*9999),title}
        ] 
        setBooks(updatedBooks);
    };
    return (
        <div>
            <BookList books={books}/>
            <Create onCreate={createBook}/>
        </div>
    )
}

export default App;
