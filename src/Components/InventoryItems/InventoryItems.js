import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
          const [InventoryItems, setInventoryItems] = useState([]);
    
        useEffect(() => {
            fetch('services.json')
                .then(res => res.json())
            .then(data=>setInventoryItems(data))
        },[])
    return (
        <section id='#services' className="text-gray-600 body-font">
        <div className="container px-20 pb-24 mx-auto">
            <h1 className='text-center text-sky-800 uppercase text-3xl font-bold my-8'>Inventory Items <div className='w-24 h-1 bg-sky-800 rounded-lg mx-auto mt-2'></div></h1>
            <div className="flex flex-wrap -m-4">
               
                {
                    InventoryItems.map(service =>
                        <InventoryItem
                            key={service.id}
                            service={service}
                        ></InventoryItem>)
              }
               
            </div>
        </div>
    </section>
    );
};

export default InventoryItems;