import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

export default function Employee({ employee }) {
  const { deleteEmployee } = useContext(EmployeeContext);
  const { updateEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [updateEmployee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td className="d-flex">
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            href="#editEmployeeModal"
            className="btn text-success "
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>

        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            onClick={() => deleteEmployee(employee.id)}
            href="#deleteEmployeeModal"
            className="btn text-danger "
            data-toggle="modal"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Edit Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer className="d-flex w-100 justify-content-center">
          <p>Düzenleyin ve kaydedin</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}
