import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { ModifProducts, addProduct } from './features/products/productSlice';
import { useSelector } from 'react-redux';

import { deleteProduct, editProduct } from './features/products/productSlice';
import Card from 'react-bootstrap/Card';




const ModifyProduct = ({product={}}) => {

    

  const dispatch = useDispatch()
  dispatch(editProduct(product))
  

  const [form, setForm] = useState({

    Nom: "",
    Quantite: "",
    image: "",
    
  })

  function handleSubmit(e){
    e.preventDefault();

      dispatch(ModifProducts({...form}))
   
    setForm({
      Nom: "",
      Quantite: "",
      image: ""
    })
    alert ("Produit modifié avec succès !")
  }
  

  return (
    
    
    <Container style={{ display: 'flex' , justifyContent : 'space-between' }}>
        
        

        
      <Form>
      <h1>Modifier le produit</h1><br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nom</Form.Label>
          <Form.Control placeholder = {product?.Nom} onChange={(e)=>setForm({...form, Nom: e.target.value})} type="text"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Quantite</Form.Label>
          <Form.Control placeholder={product?.Quantite} onChange={(e)=>setForm({...form, Quantite: e.target.value})}  as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control placeholder = {product?.image} onChange={(e)=>setForm({...form, image: e.target.value})}  type="text"  />
        </Form.Group>
        <Button variant="dark" onClick={handleSubmit}>Modifier</Button>{' '}
        
      </Form> 

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product?.image} />
      <Card.Body>
        <Card.Title>Nom : {product?.Nom}</Card.Title>
        <Card.Text>
				Quantité en magasin : {product?.Quantite}
        </Card.Text>

       
    
      </Card.Body>
    </Card>
      
    
    </Container>
   
  );
}

export default ModifyProduct;
