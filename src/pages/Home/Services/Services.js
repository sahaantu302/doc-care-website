import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('services.json')
         .then(res => res.json())
         .then(data => setServices(data.slice(0,6)));
   },[])
   return (
      <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
         <div className="service-container">
            <Row xs={1} md={3} className="g-4">
               {
                    services.map(service => <Service
                       key={service.id}
                       
                        service={service}
                    ></Service>)
                }
            </Row>
                
            </div>
        </div>
   );
};

export default Services;