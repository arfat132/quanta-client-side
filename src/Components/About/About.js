import React from 'react';
import Image from '../Images/about.jpg'
const About = () => {
    return (
        <section className="text-gray-600 body-font px-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Why Choose Us
              </h1>
      <p className="mb-8 leading-relaxed">We are responsible for organising the safe and efficient receipt, storage and despatch of goods. We'll also be responsible for workplace health and safety standards and for the security of the building and stock. Specialist may store temperature-controlled inventories.</p>
          </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={Image} />
    </div>
  </div>
</section>
    );
};

export default About;