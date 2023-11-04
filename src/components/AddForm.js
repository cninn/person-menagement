import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";

import { useContext } from "react";

export default function AddForm() {
  const { addEmployee } = useContext(EmployeeContext);
/* 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(""); */

const [newEmployee,setnewEmployee] = useState({
  name:"",
  email:"",
  address:"",
  phone:""
})

const {name,email,address,phone} = newEmployee

const onInputChange=(e)=>{
  setnewEmployee({...newEmployee,[e.target.name]:e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name,email,address,phone)
    
    
  };
  return (
   
    <Form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="phone"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block="true">
        Add New Person
      </Button>
    </Form>

  );
}
