import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories : [],
  category: {},
  
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      console.log(action)
      state.categories.push(action.payload)
    },
    editCategory: (state, action) => {

      state.category = action.payload
    },
    deleteCategory: (state, action) => {
      
      
    return state.categories.filter((ca) => ca.id !== action.payload.id);

   
    },

    ModifyCategory: (state, action) => {
      
      
      state.categories.splice(action.payload, 1)
      
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategory , editCategory, deleteCategory, ModifyCategory } = categorySlice.actions

export default categorySlice.reducer