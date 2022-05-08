import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import ManageItem from '../ManageItem/ManageItem';
const ManageItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://sheltered-lowlands-93230.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventoryItems(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://sheltered-lowlands-93230.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventoryItems.filter(inventoryItem => inventoryItem._id !== id);
                    setInventoryItems(remaining);
                })
        }
    }
    return (
        <div className=' py-20 px-12'>
            <h1 className='text-center text-sky-800 uppercase text-3xl font-bold my-8'>Manage Inventory</h1>
            <button onClick={() => navigate('/addItems')} className="text-white mb-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm  px-5 py-2.5 text-center bg-sky-800 uppercase">Add items</button>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-100 uppercase bg-sky-800">
                        <tr>
                            <th scope="col" class="px-6 py-3 w-80">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3 w-80 text-center">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3 w-60 text-center">
                                Stock
                            </th>
                            <th scope="col" class="px-6 py-3  w-60 text-center">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3  w-60 text-center">
                                Supplier
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                </table>

                {
                    inventoryItems.map(inventoryItem =>
                        <ManageItem
                            key={inventoryItem._id}
                            inventoryItem={inventoryItem}
                            handleDelete={handleDelete}
                        ></ManageItem>)
                }

            </div>
        </div>

    );
};

export default ManageItems;