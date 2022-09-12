import {  createSlice } from '@reduxjs/toolkit'

export const cartslice = createSlice({
    name:'cart',
    initialState : {a:[]},
    reducers:{
     addChat : (state,action) =>{
        state.a=[]
        state.a.push(action.payload)
       
       
     }

     },
   
    
   
    

},

)
export const {addChat} = cartslice.actions

export default cartslice.reducer
