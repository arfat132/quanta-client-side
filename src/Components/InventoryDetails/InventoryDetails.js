import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventoryDetails, setInventoryDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventoryDetails(data))
    }, [id])
    return (
        <section className="text-gray-600 body-font overflow-hidden pt-12">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={inventoryDetails.img}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-sky-800 tracking-widest uppercase mb-2">Supplier:{inventoryDetails.supplier}</h2>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">id:{id}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-bold my-2">{inventoryDetails.name}</h1>
                        <span className="text-3xl font-bold text-gray-900">${inventoryDetails.price}</span>
                        <div className="flex items-center mt-2.5 mb-5">
                            <span className="text-sky-800 text-sm font-semibold py-0.5 roundedml-3 capitalize">Stock {inventoryDetails.stock}</span>
                            <span className="text-red-700 text-sm font-semibold mr-2 px-2.5 py-0.5 roundedml-3">Sold</span>
                        </div>
                        <p className="leading-relaxed my-6">{inventoryDetails.description}</p>
                        <button className="flex text-white bg-sky-800 border-0 py-2.5 px-4 hover:bg-indigo-800 rounded font-semibold text-sm mb-6">DELIVERED</button>
                        <div className="flex">
                            <input
                                type='number'
                                name='number'
                                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-5 focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                                placeholder="Put a number" required />
                            <button className="flex ml-auto text-white bg-sky-800 border-0 py-2.5 px-4 hover:bg-indigo-800 rounded font-semibold text-sm">RESTOCK</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InventoryDetails;