import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Routes, Route, Link } from "react-router-dom";
import ProductAdd from './ProductAdd';
import Presentation from './Presentation';

import ProductTable from './ProductListTable';
import ProductItem from './ProductItem';
import CategoryAdd from './CategoryAdd';
import CategoryList from './CategoryList';
import ModifyItem from './ModifyPItem';
import axios from 'axios';
import { useEffect, useState } from 'react';


function HomePage() {

 

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img
              src="yael-logo.jpg"
              width="50"
              height="50"
              
              
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Brand href="#home" style={{ fontFamily : 'GROBOLD', textShadowColor: 'rgba(4, 0, 0, 0.75)' , textShadowOffset: {width: 5, height: 5}, textShadowRadius: 50, textShadow : '#00000' }}>YAEL DESIGN</Navbar.Brand>&nbsp;&nbsp;&nbsp;
         
          <Link to="/Home"> <Nav.Link href="#pricing" style={{color : 'white'}}>Acceuil</Nav.Link></Link>&nbsp;&nbsp;&nbsp;&nbsp;
         
          <NavDropdown title="Produits " id="nav-dropdown" style={{color : 'white'}}>
        <NavDropdown.Item eventKey="4.2"><Link to="/ProductAdd">Ajouter Produit</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"><Link to="/ProductList">Lister Tout les produits</Link></NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">retour</NavDropdown.Item>
      </NavDropdown>&nbsp;&nbsp;&nbsp;
      <NavDropdown title="Catégories " id="nav-dropdown" style={{color : 'white'}}>
        <NavDropdown.Item eventKey="4.1"><Link to="/CategoryAdd">Ajouter une Catégorie</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"><Link to="/CategoryList">Lister Toutes les catégories</Link></NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">retour</NavDropdown.Item>
      </NavDropdown>
          <Nav className="me-auto">
          
          
        
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Routes>
          
          <Route path="/ProductAdd" element={<ProductAdd />} />
          <Route path="/Liste" element={<Presentation />} />
          <Route path="/Home" element={<Presentation />} />
          <Route path="/ProductList" element={<ProductTable />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/CategoryAdd" element={<CategoryAdd />} />
          <Route path="/CategoryList" element={<CategoryList />} />
          <Route path="/ModifyProduct" element={<ModifyItem />} />

         
         
        </Routes>
      
      
    </>
  );
}

export default HomePage;