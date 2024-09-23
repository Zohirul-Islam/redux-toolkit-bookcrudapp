import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    books:[
        {
            id:1,
            name:"Bangla bakaron",
            author:"sumit saha",
            edition:2016
        },
        {
            id:2,
            name:"javascript",
            author:"HM nayem",
            edition:2022
        }
    ]
}

const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
        deleteBook:(state,action)=>{
         state.books =  state.books.filter((item)=>item.id !== action.payload)
        },
        addBook:(state,action)=>{
            state.books.push(action.payload)
        }
    }
});
export default bookSlice.reducer;
export const {deleteBook,addBook} = bookSlice.actions