import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaImage, FaTag, FaPalette, FaStar, FaClock, FaDollarSign, FaUser, FaEnvelope } from 'react-icons/fa';
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateArtAndCart = () => {
    const { user } = useContext(AuthContext);
    const loadedData = useLoaderData();

    const handleUpdateArtAndCraft = e =>{
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const itemName = form.itemName.value
        const subcategoryName = form.subcategoryName.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const newArtAndCraft = {photoUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName}
        console.log(newArtAndCraft)

        fetch(`https://assignment-10-server-site-five.vercel.app/addCraft/${loadedData._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newArtAndCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Update Successfully!",
                    text: "Your Coffee has been Updated.",
                    icon: "success"
                });
            }
        })
    }

    return (
        <div className="max-w-5xl mx-auto my-10 p-10 bg-[#eef1f1] shadow-xl rounded-lg">
            <h1 className="text-3xl text-center font-semibold text-[#52c9af] mb-6">Add Art & Craft</h1>
            <p className="text-center text-gray-600 mb-8">
                Please fill out the form below to add a new craft item to our gallery.
            </p>
            <form onSubmit={handleUpdateArtAndCraft} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-group flex flex-col">
                        <label htmlFor="image" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaImage className="mr-2 text-[#52c9af]" />Image URL</label>
                        <input
                            type="url"
                            name='photoUrl'
                            id="image"
                            defaultValue={loadedData.photoUrl}
                            placeholder="https://example.com/image.jpg"
                            className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2" required />
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="itemName" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaTag className="mr-2 text-[#52c9af]" />Item Name</label>
                        <input
                            type="text"
                            id="itemName"
                            name='itemName'
                            defaultValue={loadedData.itemName}
                            placeholder="Enter item name"
                            className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2" required />
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="subcategoryName" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaPalette className="mr-2 text-[#52c9af]" />Subcategory Name</label>
                        <select
                            id="subcategoryName"
                            name='subcategoryName'
                            defaultValue={loadedData.subcategoryName}
                            className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2">
                            <option value="">Select Subcategory</option>
                            <option value="Landscape Painting">Landscape Painting</option>
                            <option value="Portrait Drawing">Portrait Drawing</option>
                            <option value="Watercolor Painting">Watercolor Painting</option>
                            <option value="Oil Painting">Oil Painting</option>
                            <option value="Charcoal Sketching">Charcoal Sketching</option>
                            <option value="Cartoon Drawing">Cartoon Drawing</option>
                        </select>
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="shortDescription" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaEnvelope className="mr-2 text-[#52c9af]" />Short Description</label>
                        <textarea 
                        id="shortDescription" 
                        name='shortDescription'
                        defaultValue={loadedData.shortDescription}
                        placeholder="Describe the item briefly" 
                        className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2" required></textarea>
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="price" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaDollarSign className="mr-2 text-[#52c9af]" />Price</label>
                        <input 
                        type="number" 
                        id="price" 
                        name='price'
                        defaultValue={loadedData.price}
                        placeholder="0.00" 
                        className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2" required />
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="rating" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaStar className="mr-2 text-[#52c9af]" />Rating</label>
                        <input 
                        type="number" 
                        id="rating"
                        name='rating' 
                        defaultValue={loadedData.rating}
                        className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2" required step="0.1" min="0" max="5" />
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="customization" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaTag className="mr-2 text-[#52c9af]" />Customization</label>
                        <select 
                        id="customization" 
                        name='customization'
                        defaultValue={loadedData.customization}
                        className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="processingTime" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaClock className="mr-2 text-[#52c9af]" />Processing Time</label>
                        <input 
                        type="text" 
                        id="processingTime" 
                        name='processingTime'
                        defaultValue={loadedData.processingTime}
                        placeholder="e.g., 3-5 business days" 
                        className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2" required />
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="stockStatus" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaTag className="mr-2 text-[#52c9af]" />Stock Status</label>
                        <select 
                        id="stockStatus" 
                        name='stockStatus'
                        defaultValue={loadedData.stockStatus}
                        className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2">
                            <option value="In Stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="userEmail" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaEnvelope className="mr-2 text-[#52c9af]" />User Email</label>
                        <input 
                        type="email" 
                        id="userEmail" 
                        name='userEmail'
                        value={user.email} 
                        className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2" readOnly  />
                    </div>

                    <div className="form-group flex flex-col">
                        <label htmlFor="userName" className="flex items-center text-[#52c9af] mb-2 text-sm font-medium"><FaUser className="mr-2 text-[#52c9af]" />User Name</label>
                        <input 
                        type="text" 
                        id="userName" 
                        name='userName'
                        value={user.displayName} 
                        className="rounded-lg border border-[#52c9af] bg-transparent px-4 py-2 text-[#52c9af] ring-offset-1 duration-200 focus:outline-none focus:ring-2" readOnly  />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="bg-[#52c9af] text-white px-6 py-3 rounded hover:bg-[#429b93] transition-colors duration-200 ease-in-out w-full md:w-auto">
                        Update Art & Craft
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateArtAndCart;