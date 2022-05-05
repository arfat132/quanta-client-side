import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../Images/notFound.jpg';
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center mx-auto'>
            <img className='mx-auto w-90 pt-20' src={Image} alt="" />
            <h3 className='text-red-500 font-bold text-xl uppercase mb-6'>Page not found</h3>
            <p>The page you are looking for doesn`t exist or an error occurred.</p>
            <p>Go back or head over to choose a new direction</p>
            <button className="text-white my-6 bg-sky-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold uppercase rounded-lg text-sm px-5 py-2.5 text-center" onClick={()=>navigate('/')}>Home</button>
        </div>
    );
};

export default NotFound;