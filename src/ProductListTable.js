import Container from 'react-bootstrap/Container';

import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';

const ProductTable = () => {


    const products = useSelector((state) => state.products.products)
  
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
  <td>{product?.id}</td>
  <td>{product?.Nom}</td>
  <td>{product?.Quantite}</td>
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