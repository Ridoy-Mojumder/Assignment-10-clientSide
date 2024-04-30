
import { Link, useLoaderData } from "react-router-dom";


const AllArtAndCrafts = () => {

    const loadedArtAndCraft = useLoaderData();






    return (
        


        <div className="overflow-x-auto my-10">
            <table className="min-w-full border border-[#2da58b] bg-white shadow-lg">
                {/* Table Header */}
               
                <thead>
                    <tr className="h-[70px] border-b bg-[#2da58b] text-[#FFFFFF]">

                        <th className="px-6 py-4 text-start">Photo</th>
                        <th className="px-6 py-4 text-start">Item Name</th>
                        <th className="px-6 py-4 text-start hidden md:flex">Short Description</th>
                        <th className="px-6 py-4 text-start">Price</th>
                        <th className="px-6 py-4 text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loadedArtAndCraft.map((item, index) => (
                        <tr key={index} className="h-[70px] border-b bg-[#FFFFFF] text-[#2da58b]">

                            <th className="px-6 py-4 text-start">
                                <img className="h-[64px] w-[84px] rounded-full bg-[#2da58b] object-cover" src={item.photoUrl} />
                            </th>
                            <th className="px-6 py-4 text-start ">{item.itemName}</th>
                            <th className="px-6 py-4 text-start hidden md:flex">{item.shortDescription}</th>
                            <th className="px-6 py-4 text-start ">{item.price}</th>
                            <th className="px-6 py-4 text-start">
                                <Link to={`/allArtAndCrafts/${item._id}`}>
                                    <button className="flex items-center rounded-full bg-[#2ca792] px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-[#3c776d]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /> </svg>
                                        Details
                                    </button>
                                </Link>
                            </th>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>



    );
};

export default AllArtAndCrafts;