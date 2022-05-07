import React from 'react';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
const ManageItem = ({ inventoryItem, handleDelete }) => {
    const { _id, name, price, stock, supplier } = inventoryItem;
    return (
        <div >

            <table class="w-full text-sm text-left text-gray-800">
                <tbody className=''>
                    <tr class="bg-white border-b">
                        <th scope="row" class=" py-4 font-medium px-6 whitespace-nowrap w-80 ">
                            {name}
                        </th>
                        <td class="px-4 py-4 w-80 text-center">
                            {_id}
                        </td>
                        <td class="px-6 py-4 w-60 text-center">
                            {stock}
                        </td>
                        <td class="px-6 py-4 w-60 text-center">
                            {price}
                        </td>
                        <td class="px-6 py-4 w-60 text-center">
                            {supplier}
                        </td>
                        <td class=" py-4 text-right px-6">
                            <button onClick={() => handleDelete(inventoryItem._id)} className="text-white font-bold rounded text-xl  p-1 text-center bg-red-700"><RiDeleteBin6Line /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageItem;