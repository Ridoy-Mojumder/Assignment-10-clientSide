import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext)
    const loadedArtAndCraft = useLoaderData();
    const [artAndCrafts, setArtAndCrafts] = useState(loadedArtAndCraft)
    let foundItem = false;





    const handleDelete = (_id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-site-five.vercel.app/addCraft/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = artAndCrafts.filter(coffee => coffee._id !== _id);
                            setArtAndCrafts(remaining);
                        }
                    })
            }
        });

    };

    return (
        <div>
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="text-3xl font-semibold text-[#52c9af] my-10 text-center">Gallery Showcase</h1>
                {artAndCrafts.length === 0 ? (
                    <p className="text-gray-600 text-center">You have not created any art and crafts yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artAndCrafts.map((item, index) => {
                            if (item.userEmail === user.email || item.displayName === user.displayName) {
                                foundItem = true;
                                return (
                                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                        <img src={item.photoUrl} alt={item.itemName} className="w-full h-40 object-cover mb-4 rounded-lg" />
                                        <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.itemName}</h2>
                                        <p className="text-sm text-gray-600 mb-4">{item.shortDescription}</p>
                                        <p className="text-sm text-gray-600 mb-4">Rating: {item.rating}</p>
                                        <p className="text-sm text-gray-600 mb-4">Stock Status: {item.stockStatus}</p>
                                        <p className="text-sm text-gray-600 mb-4">Customization: {item.customization}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg text-[#52c9af] font-bold">${item.price}</span>
                                            <Link to={`/allArtAndCrafts/${item._id}`}>
                                                <button className="bg-[#52c9af] text-white px-4 py-2 rounded hover:bg-[#429b93] transition-colors duration-200 ease-in-out">View Details</button>
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <Link to={`/updateArtAndCrafts/${item._id}`}>
                                                <button className="bg-[#69a6eb] text-white px-4 py-2 rounded hover:bg-[#3c6ea7] transition-colors duration-200 ease-in-out">Update Details</button>
                                            </Link>
                                            <button className="bg-[#db4f3c] text-white px-4 py-2 rounded hover:bg-[#7a2c2c] transition-colors duration-200 ease-in-out" onClick={() => handleDelete(item._id)}>Delete One</button>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}

                        {!foundItem && (
                            <div className="flex justify-center items-center h-screen border-2 w-[1000px]">
                                <div className="bg-white rounded-lg shadow-md p-16  ">
                                    <div className="text-red-500 text-3xl mb-8 text-center">You have not created any cards. Lets start drawing!</div>
                                    <Link to= '/addCraft'>
                                        <button className="bg-[#52c9af] text-white px-6 py-3 rounded hover:bg-[#429b93] transition-colors duration-200 ease-in-out">Create a Card</button>
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                )}
            </div>
        </div>
    );
};

export default MyArtAndCraftList;