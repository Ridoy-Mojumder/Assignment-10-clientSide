
import { Link, useLoaderData } from "react-router-dom";
import BannerSection from "./BannerSection";
import { useState } from "react";
import Swal from "sweetalert2";



const Home = () => {
    const loadedArtAndCraft = useLoaderData();
    const [artAndCrafts, setArtAndCrafts] = useState(loadedArtAndCraft)


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

                fetch(`http://localhost:5000/addCraft/${_id}`, {
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

            <BannerSection></BannerSection>
            <div>
                <div className="max-w-5xl mx-auto my-10 ">
                <h1 className="text-3xl font-semibold text-[#52c9af] my-10 text-center ">Gallery Showcase</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artAndCrafts.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <img src={item.photoUrl} alt={item.itemName} className="w-full h-40 object-cover mb-4 rounded-lg" />
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.itemName}</h2>
                                <p className="text-sm text-gray-600 mb-4">{item.shortDescription}</p>
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;