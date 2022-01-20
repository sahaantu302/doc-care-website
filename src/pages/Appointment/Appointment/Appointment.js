
import { useParams } from 'react-router';


const Appointment = () => {
   const {serviceId} = useParams();
   // const {name, description, img } = service;
   // const [services, setServices] = useState([]);
   // useEffect(() => {
   //    fetch('services.json')
   //       .then(res => res.json())
   //       .then(data => setServices(data));
   // },[])
   // const matchingService = services.find((service) => service.id === Number(id));
   return (
      <div className="mt-5 pt-5">
         <h2>This is Appointment: {serviceId}</h2>
      </div>
      // <div id="services">
      //      {matchingService?.name ? (
      //       <div className="service pb-3 container">
      //       <Col>
      //          <Card className="p-2">
      //          <Card.Img variant="top" src={img} />
      //          <Card.Body>
      //             <Card.Title className="p-2">{name}</Card.Title>
      //             <Card.Text>
      //                {description}
      //             </Card.Text>
      //          </Card.Body>
      //       </Card>
      //       </Col>    
      //   </div>
      //   ) : (
      //       <div >
      //       </div>
      //   )}
      //   </div>
   );
};

export default Appointment;