import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';



const MyItems = () => {
    const [myInventory, setMyInventory] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        const getMyInventory = async () => {
          const email = user?.email;
          console.log(email);
          const url = `http://localhost:5000/inventory?email=${email}`;
          try {
            await fetch(url)
              .then(res => res.json())
              .then(data => setMyInventory(data))
          } catch (error) {
            console.log(error?.message)
          }
        }
        getMyInventory();
      }, [user])
    

    return (
        <div>
      <section id='#services' className="text-gray-600 body-font">
        <div className="container px-20 pb-16 mx-auto">
            <h1 className='text-center text-sky-800 uppercase text-3xl font-bold py-8'>Inventory Items <div className='w-24 h-1 bg-sky-800 rounded-lg mx-auto mt-2'></div></h1>
            <div className="flex flex-wrap -m-4">
            
                        <h1>lenght:{myInventory.lenght}</h1>
            </div>
            </div>
            <button onClick={()=>navigate('/manageItems')} className='px-20 float-right uppercase text-xl font-bold text-sky-800 inline-flex items-center'>Manage Inventories  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" stroke-Linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg></button>
               </section>
        </div>
    );
};

export default MyItems;