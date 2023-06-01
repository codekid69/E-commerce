import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/Form';
function AddProducts() {
  return <div className="mainCreate">
    <div className="createItem">
      <div className="text-left">
        {/* heading */}
        <h3>Add Product</h3>
      </div>
      <div>
        {/* form */}
        <Form className="formController">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="boldLabel">Name</Form.Label>
        <Form.Control type="text"  />
        
      </Form.Group>
<FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Label className="boldLabel">Description</Form.Label>
       
        <Form.Control
          as="textarea"
         
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="boldLabel">Price</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="boldLabel">Rating</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>

  </div>;
}

export default AddProducts;
