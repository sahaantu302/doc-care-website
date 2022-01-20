import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Teams.css';

const Teams = () => {
   return (
      <div>
         <h1>Our Teams</h1>
         <Row xs={1} md={4} className="g-4 our-team">
            <Col>
               <Card  className="p-5">
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" />
               <Card.Body>
                  <Card.Title className="p-2">Dr. Bobbi Peterson</Card.Title>
               </Card.Body>
               </Card>
            </Col>
            <Col>
               <Card className="p-5">
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg" />
               <Card.Body>
                  <Card.Title className="p-2">Dr. K. Roxanne</Card.Title>
               </Card.Body>
               </Card>
            </Col>
            <Col>
               <Card className="p-5">
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/portrait-doctor_144627-39390.jpg" />
               <Card.Body>
                  <Card.Title className="p-2">Dr. Marvin Berlin</Card.Title>
               </Card.Body>
               </Card>
            </Col>
            <Col>
               <Card className="p-5">
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" />
               <Card.Body>
                  <Card.Title className="p-2">Elizabeth Blackwell </Card.Title>
               </Card.Body>
               </Card>
            </Col>
         </Row>
      </div>
   );
};

export default Teams;