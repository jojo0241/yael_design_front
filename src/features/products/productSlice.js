import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  product: {},
  
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action)
      state.products.push(action.payload)
      
      axios.post('http://localhost:3000/products', action.payload)
      .then(res => {
        console.log(res.data, "data is adding !")
      })
      .catch(err => console.log(err))
      
    },

    addProducts: (state, action) => {
      
      state.products = action.payload
      
    },

    editProduct: (state, action) => {

      state.product = action.payload
    },
    deleteProduct: (state, action) => {
      
     // return state.products.filter((product) => product.id !== action.payload.id);
     /* axios.delete('http://localhost:3000/products/' +  action.payload._id)
     .then(res => {
       console.log(res.data, "data is deleting !")
     })
     .catch(err => console.log(err)) */
     console.log('http://localhost:3000/products/' +  action.payload._id)
    },

    ModifProducts: (state, action) => {
      
      state.product = action.payload

      const product2 = state.products.find((up) => up.id = action.payload.id)
      
      if (product2){

          product2.Nom = action.payload.Nom
          product2.Quantite = action.payload.Quantite
          product2.image = action.payload.image
      }


      
      return state
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, editProduct, deleteProduct, ModifProducts, addProducts } = productSlice.actions

export default productSlice.reducer