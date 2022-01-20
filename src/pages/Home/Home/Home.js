import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../ChooseUs/Choose';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';

const Home = () => {
   return (
      <div id="home">
         <Banner></Banner>
         <Choose></Choose>
         <Services></Services>
         <Teams></Teams>
      </div>
   );
};

export default Home;