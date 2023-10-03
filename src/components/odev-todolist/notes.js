import React from "react";
import Note from "./note";
import { Row } from "react-bootstrap";

const Notes = () => {
  return (
    <div className=" border border-info m-2 p-2 w-100">
      <Row sm={2} md={3} lg={4} xl={6} className="align-items-center justify-content-center">
         <Note />
         <Note />
         <Note />
         <Note />
      </Row>
     
    </div>
  );
};

export default Notes;
