import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Choose.css';

const Choose = () => {
   return (
      <div className="choose-us container">
         <h1>Why Choose Us</h1>
         <Row xs={1} md={3}>
            <Col className="m-5">
               <h4>Professional Doctors</h4>
            </Col>
            <Col className="m-5">
               <h4>Countries Best Hospital </h4>
            </Col>
            <Col className="m-5">
               <h4>Fastest Appointment System</h4>
            </Col>
            <Col  className="m-5">
               <h4>Best Accommodation for You</h4>
            </Col>
            <Col  className="m-5">
               <h4>Best Pharmacy</h4>
            </Col>
            <Col  className="m-5">
               <h4>Best Restaurent</h4>
            </Col>
         </Row>
      </div>
   );
};

export default Choose;