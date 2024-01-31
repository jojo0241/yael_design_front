import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productSlice'
import categoriesReducer from '../features/categories/categorieSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        categories : categoriesReducer,    
    },
})
