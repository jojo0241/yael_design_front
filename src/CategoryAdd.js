import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addCategory } from './features/categories/categorieSlice';



const CategoryAdd = () => {

    const dispatch = useDispatch()
  
    const [form, setForm] = useState({
      Nom : "",
      image: "",
      id: ""
    })
  
    function handleSubmit(e){

        e.preventDefault();
    if(form && form.Nom && form.image){
      dispatch(addCategory({...form, id: Date.now()}))
    }
    setForm({
      Nom: "",
      image: ""
    })
    alert("Categorie ajouté !")
    console.log(form)
      
    }
  
    return (
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nom de la Categorie</Form.Label>
            <Form.Control value={form.Nom} onChange={(e)=>setForm({...form, Nom: e.target.value})} type="text" placeholder="nom de la catégorie..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control onChange={(e)=>setForm({...form, image: e.target.value})} value={form.image} type="text" placeholder="image Catégorie..." />
        </Form.Group>
          
          <Button variant="primary" onClick={handleSubmit}>Enregistrer la catégorie</Button>{' '}
        </Form> 
      </Container>

    );
  }
  
  export default CategoryAdd;