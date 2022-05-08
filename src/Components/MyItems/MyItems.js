import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {

  const [myInventory, setMyInventory] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {

    const getInventory = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/myInventory?email=${email}`;

      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setMyInventory(data);
    }
    getInventory();

  }, [user, myInventory])

  const handleDelete = id => {

    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = myInventory.filter(myItem => myItem._id !== id);
          myInventory(remaining);
        });
    };
  };

  return (
    <div>
      <section id='#services' className="text-gray-600 body-font">
        <div className="container px-20 mx-auto py-20">
          <h1 className='text-center text-sky-800 uppercase text-3xl font-bold py-12'>My Items ({myInventory.length})</h1>
          <div className="flex flex-wrap -m-4">
            {
              myInventory.map(myItem =>
                <MyItem
                  key={myItem._id}
                  myItem={myItem}
                  handleDelete={handleDelete}
                ></MyItem>)
            }
          </div>
          <button onClick={() => navigate('/manageItems')} className='px-20 float-right uppercase text-xl font-bold text-sky-800 inline-flex items-center'>Manage Inventories  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" stroke-Linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg></button>
        </div>
       
      </section>
    </div>
  );
};

export default MyItems;