import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../store/bookSlice';
import { nanoid } from 'nanoid'
function BookForm() {
    const dispatch = useDispatch();
    const [book,setbook] = useState({
        name:"",
        author:'',
        edition:""
    })

    const handleChange =(e)=>{
        setbook({
            ...book,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addBook({...book,id:nanoid()}));
        setbook({
        name:"",
        author:'',
        edition:""
        })
    }

  return (
    <div>
        <div className="row justify-content-center">
           <div className="col-lg-5 border bg-secondary p-3">
            <h1 className='mb-3 text-capitalize'>fill the book form</h1>
           <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className='form-label' htmlFor="bookname">bookName:</label>
                <input onChange={handleChange} value={book.name} className='form-control' type="text" name="name" id="bookname" />
            </div>
            <div className="mb-3">
                <label className='form-label' htmlFor="bookauthor">bookAuthor</label>
                <input onChange={handleChange} value={book.author} className='form-control' type="text" name="author" id="bookauthor" />
            </div>
            <div className="mb-3">
                <label className='form-label' htmlFor="edition">Edition</label>
                <input onChange={handleChange} value={book.edition} className='form-control' type="text" name="edition" id="edition" />
            </div>
            <div className="mb-3">
                <button type='submit' className='btn btn-primary'>Add Book</button>
            </div>
        </form>
           </div>
        </div>
        
    </div>
  )
}

export default BookForm