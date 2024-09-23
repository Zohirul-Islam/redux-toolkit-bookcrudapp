import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../store/bookSlice';

function Books() {
  const books=  useSelector((state)=>state.bookR.books);
  const dispatch = useDispatch();
  console.log(books);
  return (
    <div className='py-3 bg-white'>
        <h1 className='text-capitalize py-2 text-black border-bottom'>our books are hear</h1>
        <div className="bookwrapper py-2">
            {
                books && books.length > 0 ? (
                    <ul className=' text-black p-3 d-flex'>
                         {
                            books.map((item)=>(
                                <li className='m-2 p-2 bg-primary list-unstyled rounded text-white shadow-lg'>
                                    <p>bookName:{item.name}</p>
                                    <p>bookAuthor:{item.author}</p>
                                    <p>bookEdition:{item.edition}</p>
                                    <p><button onClick={()=>dispatch(deleteBook(item.id))} className='btn-danger btn'>delete</button></p>
                                </li>
                            ))
                         }
                    </ul>
                ):<p>books not found</p>
            }
        </div>
    </div>
  )
}

export default Books