import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(()=>{
    const fecthAllBooks = async ()=>{
        try{
            const res = await axios.get("http://localhost:5000/books")
            setBooks(res.data); 
            console.log(res)
        } catch(err){
            console.log(err)
        }
    }
    fecthAllBooks()
  }, [])

  const handleDelete = async (id)=>{
    try{
        await axios.delete("http://localhost:5000/books/"+ id)
        // setBooks(books.filter(book => book.id !== id));
        window.location.reload()
    }catch(err){
        console.log(err)
        // console.log(handleDelete)
    }
  }

  


  return (
    <div>
        <h1>Lama Book Shop</h1>
        <div className="books">
            {books.map(books=>(
                <div className="book" key={books.id}>
                    {books.cover && <img src="{book.cover}" alt="" />}
                    <h2>{books.title}</h2>
                    <p>{books.desc}</p>
                    <span>{books.price}</span>
                    <button className='delete' onClick={()=>handleDelete(books.id)}>Delete</button>
                    <button className='update'><Link to={`/update/${books.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <button><Link to="/add">Add new book</Link></button>
    </div>
  )
}

export default Books