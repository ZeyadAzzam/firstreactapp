import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";

function Products() {
  let [items, setItems] = useState([]);


  return (

    <>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  


    </>
  )
   
  }
export default Products;
