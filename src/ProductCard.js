import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router';
import { useDispatch } from 'react-redux'
import { deleteProduct, editProduct } from './features/products/productSlice';
import { Container } from 'react-bootstrap';
import {Routes, Route, Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

import ProductItem from './ProductItem';
import axios from 'axios';



const ProductCard = ({product={}}) => {

	
	const navigate = useNavigate();
	const dispatch = useDispatch()

	function detail(product){
		dispatch(editProduct(product))
		
		
	}
	function del(product){

		
		dispatch(deleteProduct(product))
	
	}
	function modify(product){


		dispatch(editProduct(product))
		
	}
	

	return (
		<Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={product?.image} />
      <Card.Body>
        <Card.Title>Nom : {product?.name}</Card.Title>
        <Card.Text>
				Quantité en magasin : {product?.quantity}
        </Card.Text>
        
		<Link to="/Modifyproduct"><Button variant="success" onClick={()=>detail(product)}>Modifier</Button></Link>&nbsp;&nbsp;&nbsp;
		<Button variant="danger" onClick={()=>del(product)}>Supprimer</Button>&nbsp;&nbsp;&nbsp;
		
		<Routes>
			<Route path="/Modifyproduct" element={<ProductItem />}></Route>
		</Routes>
		
		

		
      </Card.Body>
    </Card>
	);
}

export default ProductCard;
