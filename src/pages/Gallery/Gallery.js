import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
   return (
      <div>
         <h1 className="mt-5 pt-5">Gallery</h1>
         <Row xs={1} md={4} className="g-4 gallery ps-5 pe-5 pb-5">
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/beautiful-girl-sitting-dentist-s-office_1157-21014.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/beautiful-smart-asian-doctor-patient-discussing-explaining-something-with-clipboard_7861-1219.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/my-daughter-isn-t-afraid-pay-visit-here_329181-7634.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/doctor-examining-his-young-patient_1098-2162.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/elderly-female-smiling-with-doctor-visiting-senior-patient-woman-hospital-ward_1150-21710.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/rejuvenating-facial-treatment_158595-4602.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/close-up-portrait-beautiful-young-lady-sitting-dental-chair-while-stomatologist-hands-sterile-gloves-holding-tooth-samples_158595-7636.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign_496169-1043.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/woman-patient-dentist_1303-9364.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/doctor-listens-small-child-with-stethoscope_176873-5214.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/angled-mirror-used-by-dentist-doctor-little-girl-with-mouth-open-dental-office-dentistry-specialist-during-child-cavity-consultation-stomatology-office-using-modern-technology_482257-12106.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/close-up-doctor-kid-wearing-masks_23-2148868116.jpg" />
            </Col>


            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/home-house-exterior-design-showing-tropical-pool-villa-with-sun-bed_41487-564.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/3d-rendering-loft-luxury-hotel-reception-cafe-lounge-restaurant_105762-557.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/group-friends-eating-together_53876-9934.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25532.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/close-up-shelves-drugs_13339-103453.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg" />
            </Col>
            <Col>
               <Card.Img variant="top" src="https://image.freepik.com/free-photo/pharmacist-holding-medicine-box-capsule-pack-pharmacy-drugstore_67340-26.jpg" />
            </Col>
           
            </Row>
      </div>
   );
};

export default Gallery;