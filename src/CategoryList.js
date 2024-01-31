import Container from 'react-bootstrap/Container';

import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';

const CategoryList = () => {


    const categories = useSelector((state) => state.categories.categories)
  
      return (
        <>
          
         
  
  <Container>
  <b><font color="white" style={{ fontFamily : 'Montserrat', textAlign : 'Left' }}><h1>Liste des différentes Categories</h1></font></b><br />
         

  <Table striped bordered hover variant="dark" style={{ width: '50rem' }}>
      <thead>
        <tr>
          <th>id Categorie</th>
          <th>Nom</th>
          <th>Lien Image</th>
        </tr>
      </thead>

      {categories && categories.length >0 && categories.map((Category, key) => (
				

<tbody>

<tr key={key}>
  <td>{Category?.id}</td>
  <td>{Category?.Nom}</td>
  <td>{Category?.image}</td>
</tr>

</tbody>
					
				
			))}
      
      </Table>
  
      
  </Container>
        
  
  
          
        </>
      );
    }
    export default CategoryList;