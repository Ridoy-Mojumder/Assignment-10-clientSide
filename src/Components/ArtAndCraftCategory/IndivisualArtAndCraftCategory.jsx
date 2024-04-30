import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const IndivisualArtAndCraftCategory = () => {
    const [artAndCraftData, setArtAndCraftData] = useState([]);
    const loadedData = useLoaderData();
    const [loadedDataMap, setLoadedDataMap] = useState([]);
    const [artAndCraftDataMap, setArtAndCraftDataMap] = useState([]);

    useEffect(() => {
        fetch("https://assignment-10-server-site-five.vercel.app/addCraft/")
            .then(res => res.json())
            .then(data => {
                setArtAndCraftData(data);
                const artAndCraftSubcategories = data.map(item => item.subcategoryName);
                setArtAndCraftDataMap(artAndCraftSubcategories);
            });
    }, []);

    useEffect(() => {
        const loadedSubcategories = loadedData.map(item => item.subcategoryName);
        setLoadedDataMap(loadedSubcategories);
    }, [loadedData]);

    return (
        <div>
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="text-3xl font-semibold text-[#52c9af] my-10 text-center">Gallery Showcase</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artAndCraftData.map((item, index) => {
                        // Check if loadedDataMap and artAndCraftDataMap have matching subcategories
                        const matchedIndex = loadedDataMap.findIndex(subcategory => subcategory === item.subcategoryName);
                        const isMatched = matchedIndex !== -1;

                        return (
                            isMatched && (
                                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                    <img src={item.photoUrl} alt={item.itemName} className="w-full h-40 object-cover mb-4 rounded-lg" />
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.itemName}</h2>
                                    <p className="text-sm text-gray-600 mb-4">{item.shortDescription}</p><p className="text-sm text-gray-600 mb-4">Rating: {item.rating}</p>
                                    <p className="text-sm text-gray-600 mb-4">Stock Status: {item.stockStatus}</p>
                                    <p className="text-sm text-gray-600 mb-4">Customization: {item.customization}</p>
                                    <p className="text-sm text-gray-600 mb-4">Processing Time: {item.processingTime}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg text-[#52c9af] font-bold">${item.price}</span>
                                        <Link to={`/allArtAndCrafts/${item._id}`}>
                                            <button className="bg-[#52c9af] text-white px-4 py-2 rounded hover:bg-[#429b93] transition-colors duration-200 ease-in-out">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        );
                    })}
                </div>
                <div className="flex justify-center items-center my-16">
                    <Link to='/'>
                        <button className="bg-[#52c9af] text-white px-4 py-2 rounded hover:bg-[#429b93] transition-colors duration-200 ease-in-out">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IndivisualArtAndCraftCategory;
