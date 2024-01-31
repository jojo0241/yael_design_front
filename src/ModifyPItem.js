import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux'

import { Link, Route, Routes } from 'react-router-dom';
import ModifyProduct from './ModifyProduct';

const ModifyItem = () => {

    const product = useSelector((state) => state.products.product)

    return (
        <div>
            
            <ModifyProduct product={product} />
             
            
        </div>
    );
}

export default ModifyItem;
