import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../Firebase/firebase.init";

const AddItems = () => {
    const [user] = useAuthState(auth);

    const handleAddItems = event => {
        console.log(event);
        event.preventDefault();
        const inventory = {
            email: user.email,
            name: event.target.name.value,
            image: event.target.image.value,
            price: event.target.price.value,
            description: event.target.description.value,
            supplier: event.target.supplier.value,
            stock: event.target.stock.value
        }
        axios.post('https://sheltered-lowlands-93230.herokuapp.com/inventory', inventory)
            .then(response => {
                console.log(response)
                const { data } = response;
                console.log(data.insertedId)
                if (data.insertedId) {
                    toast('Added Successfully!!!');
                    event.target.reset();
                }
            })

    };

    return (

        <div className='py-24 w-6/12 mx-auto'>
            <h1 className='text-center text-sky-800 uppercase text-3xl font-bold my-8'>Add A new Item</h1>
            <form onSubmit={handleAddItems} className='bg-gray-50 p-8 border border-blue-200 rounded-lg mt-12 shadow-lg'>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer" placeholder={user?.email} required="" />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer" placeholder=" " required="" />
                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type='text' name="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer" placeholder=" " required="" />
                    <label htmlFor="floating_image" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer" placeholder=" " required="" />
                    <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer" placeholder=" " required="" />
                    <label htmlFor="floating_description" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Description</label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="supplier" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer" placeholder=" " required="" />
                        <label htmlFor="floating_supplier" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="stock" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer" placeholder=" " required="" />
                        <label htmlFor="floating_stock" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock</label>
                    </div>
                </div>
                <button type="submit" className="text-white bg-sky-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-sky-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center uppercase font-bold">Add Item</button>

            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItems;