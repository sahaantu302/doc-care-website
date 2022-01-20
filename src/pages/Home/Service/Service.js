import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
   const { id, name, description, img } = service;
   return (
      <div className="service pb-3 container">
            <Col>
               <Card className="p-2">
               <Card.Img variant="top" src={img} />
               <Card.Body>
                  <Card.Title className="p-2">{name}</Card.Title>
                  <Card.Text>
                     {description}
                  </Card.Text>
               </Card.Body>
               <Link to={`/appointment/${id}`}>
                <button className="btn btn-warning">Appointment {name.toLowerCase()}</button>
            </Link>
            </Card>
            
            </Col>
            
        </div>
   );
};

export default Service;