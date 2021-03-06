import React from 'react';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";

const MyItem = ({ myItem, handleDelete}) => {
    const {name, img, price, stock, description, supplier } = myItem;
 
    return (

        <div className="p-4 md:w-1/3 ">
            <div className="h-full border-2 bg-gray-50 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                <img className="w-full object-cover object-center" src={img} alt="blog" />

                <div className="p-6">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h5>
                <div className="flex items-center mt-2.5 mb-5">
                        <span className="text-sky-800 text-sm font-semibold py-0.5 roundedml-3 capitalize">Supplier: {supplier}</span>
                        <span className="text-red-700 text-sm font-semibold mr-2 px-2.5 py-0.5 roundedml-3">Stock {stock}</span>
                </div>
                    <p className='pb-4'>{description }</p>
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900">${price}</span>
                        <div className="flex items-center"><button  className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm  px-5 py-2.5 text-center bg-sky-800">UPDATE</button>
                        <button onClick={() => handleDelete(myItem._id)} className="text-white font-bold rounded-lg text-xl  p-2.5 text-center bg-red-700 ml-2"><RiDeleteBin6Line /></button></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyItem;