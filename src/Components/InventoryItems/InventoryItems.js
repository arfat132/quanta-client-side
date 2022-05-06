import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const navigate=useNavigate()
    
        useEffect(() => {
            fetch('http://localhost:5000/inventory')
                .then(res => res.json())
            .then(data=>setInventoryItems(data))
        },[])
    return (
        <section id='#services' className="text-gray-600 body-font">
        <div className="container px-20 pb-16 mx-auto">
            <h1 className='text-center text-sky-800 uppercase text-3xl font-bold my-8'>Inventory Items <div className='w-24 h-1 bg-sky-800 rounded-lg mx-auto mt-2'></div></h1>
            <div className="flex flex-wrap -m-4">
               
                {
                    inventoryItems.map(inventoryItem =>
                        <InventoryItem
                            key={inventoryItem._id}
                            inventoryItem={inventoryItem}
                        ></InventoryItem>)
              }
               
            </div>
            </div>
            <button onClick={()=>navigate('/manageItems')} className='px-20 float-right uppercase text-xl font-bold text-sky-800 inline-flex items-center'>Manage Inventories  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" stroke-Linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg></button>
               </section>
    );
};

export default InventoryItems;          