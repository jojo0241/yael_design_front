import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, editProduct } from './features/products/productSlice';
import { Container } from 'react-bootstrap';


const ProductItem = ({product={}}) => {
    
	const navigate = useNavigate();
	const dispatch = useDispatch()

	
	function del(product){

		
		dispatch(deleteProduct(product))
	
	}
	
	

	return (
		<Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={product?.image} />
      <Card.Body>
        <Card.Title>Nom : {product?.Nom}</Card.Title>
        <Card.Text>
				Quantité en magasin : {product?.Quantite}
        </Card.Text>
        
		<Button variant="dark" onClick={()=>del(product)}>Supprimer</Button>&nbsp;&nbsp;&nbsp;
		
		
		
		
		

		
      </Card.Body>
    </Card>
	);
}

export default ProductItem;
