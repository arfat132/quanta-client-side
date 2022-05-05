import React from 'react';
import AppleImage from '../Images/apple.png';
import AsusImage from '../Images/asus.png';
import DellImage from '../Images/dell.png';
import HpImage from '../Images/hp.png';
import LenovoImage from '../Images/lenovo.png';
import MicrosoftImage from '../Images/microsoft.png';
import ToshibaImage from '../Images/toshiba.png';
const LogoSection = () => {
    return (
        <section className="text-gray-600 body-font px-12">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/6 sm:w-1/2 p-4">
        <div className="flex relative">
                            <img alt="gallery" className=" w-full h-full object-cover object-center" src={ AppleImage}/>
       </div>
      </div>
      <div className="lg:w-1/6 sm:w-1/2 p-4">
        <div className="flex relative">
        <img alt="gallery" className=" w-full h-full object-cover object-center" src={ AsusImage}/>
        </div>
      </div>
      <div className="lg:w-1/6 sm:w-1/2 p-4">
        <div className="flex relative">
        <img alt="gallery" className=" w-full h-full object-cover object-center" src={ DellImage}/>
        </div>
      </div>
      <div className="lg:w-1/6 sm:w-1/2 p-4">
        <div className="flex relative">
        <img alt="gallery" className=" w-full h-full object-cover object-center" src={ MicrosoftImage}/>
        </div>
      </div>
      <div className="lg:w-1/6 sm:w-1/2 p-4">
        <div className="flex relative">
        <img alt="gallery" className=" w-full h-full object-cover object-center" src={ LenovoImage }/>
        </div>
      </div>
      <div className="lg:w-1/6 sm:w-1/2 p-4">
        <div className="flex relative">
        <img alt="gallery" className=" w-full h-full object-cover object-center" src={ ToshibaImage}/>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default LogoSection;