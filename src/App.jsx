import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { decrement, increment } from './store/counterSlice';
import Books from './components/Books';
import BookForm from './components/BookForm';
function App() {
  const count =  useSelector(state=>state.counterR.count);
  const dispatch = useDispatch()
  const handleIncrement = ()=>{
    dispatch(increment());
  }
  return (
    <div className='bg-success text-white py-4 text-center d-flex flex-column gap-4'>
      <h1>couter app</h1>
      <div>
        <h4 className='mb-4'>count:{count}</h4>
        <button onClick={handleIncrement} className='btn '>increment</button>
        <button onClick={()=>dispatch(decrement())} className='btn'>decrement</button>
      </div>
      <BookForm></BookForm>
      <Books/>
    </div>
  )
}

export default App