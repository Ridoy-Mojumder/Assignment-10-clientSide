import { useLoaderData } from "react-router-dom";


const AllArtAndCrafts = () => {
    const loadedArtAndCraft = useLoaderData();
    return (
        <div className="max-w-5xl mx-auto mt-10">
            <h1 className="text-3xl font-semibold text-[#52c9af] mb-6">Gallery Showcase</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loadedArtAndCraft.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <img src={item.photoUrl} alt={item.itemName} className="w-full h-40 object-cover mb-4 rounded-lg" />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.itemName}</h2>
                        <p className="text-sm text-gray-600 mb-4">{item.shortDescription}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg text-[#52c9af] font-bold">${item.price}</span>
                            <button className="bg-[#52c9af] text-white px-4 py-2 rounded hover:bg-[#429b93] transition-colors duration-200 ease-in-out">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllArtAndCrafts;