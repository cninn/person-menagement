import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";

import { useContext, useState } from "react";

export default function EditForm({ theEmployee }) {
  const { updateEmployee } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

    const updatedEmployee = {id,name,email,address,phone};

    const handleSubmit = (e)=>{
        e.preventDefault();
        updateEmployee(id,updatedEmployee);
    }

  return (
    <Form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="phone"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block="true">
        Edit Employee
      </Button>
    </Form>
  );
}
