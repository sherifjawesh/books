import BookShow from './Show'

function List({books}) {
    const renderedBooks = books.map((book)=>{
        return <BookShow key={book.id} book={book}/>
    })
    return <div className='book-list'>{renderedBooks}</div>;
}

export default List