import React, { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../context/EmployeeContext";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

export default function EmployeeList() {
  const { sortedEmployees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [sortedEmployees]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee,indexOfLastEmployee);
  const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);


  


  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              className="btn btn-success text-white"
              data-toggle="modal"
              onClick={handleShow}
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination 
      pages={totalPagesNum} 
      setCurrentPage={setCurrentPage}
      currentEmployees={currentEmployees}
      sortedEmployees={sortedEmployees}
       />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer className="d-flex w-100 justify-content-center">
          <p>Bilgileri girin ve ekleme tuşuna basın</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}
