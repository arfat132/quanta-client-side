import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventoryDetails, setInventoryDetails] = useState({});
 
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventoryDetails(data))
    }, [id, inventoryDetails])

    const handleUpdatedStock = event => {
        event.preventDefault();
        
        const stock = event.target.stock.value;
        console.log(stock)
        const newStock = parseInt(stock) + inventoryDetails.stock;
        const updatedStock ={ newStock };
        console.log(updatedStock )

        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Restock Successfully');
                event.target.reset();
            })
            
    }
    const handleDeliver = event => {

        const newStock = parseInt(inventoryDetails.stock) - 1;
        const updatedStock ={ newStock };
        console.log(updatedStock )

        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Delivered Successfully');
                
            })
            
    }
    return (
        <section className="text-gray-600 body-font overflow-hidden pt-12">
            <div className="container px-5 pt-24 pb-12 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={inventoryDetails.img} />
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
                        <button onClick={handleDeliver} className="flex text-white bg-sky-800 border-0 py-2.5 px-4 hover:bg-indigo-800 rounded font-semibold text-sm mb-6">DELIVERED</button>
                        <form onSubmit={ handleUpdatedStock} className="flex">
                            <input
                                type='number'
                                name='stock'
                                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-5 focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                                placeholder="Put a number" required />
                            <button className="flex ml-auto text-white bg-sky-800 border-0 py-2.5 px-4 hover:bg-indigo-800 rounded font-semibold text-sm">RESTOCK</button>
                        </form>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate('/manageItems')} className='px-20 pb-12 float-right uppercase text-xl font-bold text-sky-800 inline-flex items-center'>Manage Inventories  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" stroke-Linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
            </svg></button>
        </section>
    );
};

export default InventoryDetails;