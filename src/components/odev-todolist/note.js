import React from "react";
import { Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const Note = () => {
  return (
    <div className=" border border-warning m-2">
    
      <p>Ders Calis</p>
      <div className="d-flex gap-3 align-items-center justify-content-center">
        <Form.Check type="checkbox" id="custom-check" />
        <FaTrashAlt className="icon-large"/>
      </div>
   
    </div>
  );
};

export default Note;
