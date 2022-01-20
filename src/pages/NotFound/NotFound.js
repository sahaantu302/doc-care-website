import React from 'react';
import notfound from '../../images/404.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div>
         <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button className="btn btn-success">Go Back</button>
            </Link>
      </div>
   );
};

export default NotFound;