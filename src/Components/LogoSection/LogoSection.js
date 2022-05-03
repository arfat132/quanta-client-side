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
        <section class="text-gray-600 body-font px-12">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/6 sm:w-1/2 p-4">
        <div class="flex relative">
                            <img alt="gallery" class=" w-full h-full object-cover object-center" src={ AppleImage}/>
       </div>
      </div>
      <div class="lg:w-1/6 sm:w-1/2 p-4">
        <div class="flex relative">
        <img alt="gallery" class=" w-full h-full object-cover object-center" src={ AsusImage}/>
        </div>
      </div>
      <div class="lg:w-1/6 sm:w-1/2 p-4">
        <div class="flex relative">
        <img alt="gallery" class=" w-full h-full object-cover object-center" src={ DellImage}/>
        </div>
      </div>
      <div class="lg:w-1/6 sm:w-1/2 p-4">
        <div class="flex relative">
        <img alt="gallery" class=" w-full h-full object-cover object-center" src={ MicrosoftImage}/>
        </div>
      </div>
      <div class="lg:w-1/6 sm:w-1/2 p-4">
        <div class="flex relative">
        <img alt="gallery" class=" w-full h-full object-cover object-center" src={ LenovoImage }/>
        </div>
      </div>
      <div class="lg:w-1/6 sm:w-1/2 p-4">
        <div class="flex relative">
        <img alt="gallery" class=" w-full h-full object-cover object-center" src={ ToshibaImage}/>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default LogoSection;