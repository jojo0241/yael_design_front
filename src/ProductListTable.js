import Container from 'react-bootstrap/Container';

import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux'
import { addProducts } from './features/products/productSlice';
import { useEffect } from 'react';
import axios from 'axios';


const ProductTable = () => {


    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

   

    useEffect( ()=> {

      axios.get('http://localhost:3000/products')
      .then(res => {
        dispatch(addProducts(res.data))
        console.log(res.data)
      })
      .catch(err => console.log(err))
      
    }, [])
      console.log(products)
      return (
        <>
          
         
  
  <Container>
  <b><font color="white" style={{ fontFamily : 'Montserrat', textAlign : 'Left' }}><h1>Liste des Produits</h1></font></b><br />
         

  <Table striped bordered hover variant="dark" style={{ width: '50rem' }}>
      <thead>
        <tr>
          <th>id Produit</th>
          <th>Nom</th>
          <th>Quantité</th>
          <th>Lien Image</th>
        </tr>
      </thead>

      {products && products.length >0 && products.map((product, key) => (
				

<tbody>

<tr key={key}>
  <td>{product?._id}</td>
  <td>{product?.name}</td>
  <td>{product?.quantity}</td>
  <td>{product?.image}</td>
</tr>

</tbody>
					
				
			))}
      
      </Table>
  
      
  </Container>
        
  
  
          
        </>
      );
    }
    export default ProductTable;