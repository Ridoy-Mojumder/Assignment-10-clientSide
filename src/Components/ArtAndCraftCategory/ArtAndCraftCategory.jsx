
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ArtAndCraftCategory = () => {

    const [artAndCraftCategoryData, setArtAndCraftCategoryData] = useState([]);

    useEffect(() => {
        fetch("https://assignment-10-server-site-five.vercel.app/artAndCraftCategory/")
            .then(res => res.json())
            .then(data => setArtAndCraftCategoryData(data))
    }, [])

    return (
        <div>
            <div className="max-w-7xl mx-auto my-10 p-10 shadow-xl rounded-lg">
                <h1 className="text-3xl text-center font-semibold text-[#52c9af] mb-6">Art & Craft Categories</h1>
                <p className="text-center text-gray-600 mb-8">
                    Please fill out the form below to add a new craft item to our gallery.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {artAndCraftCategoryData.slice(0, 6).map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex gap-8">
                            <div>
                                <img src={item.image} alt={item.subcategoryName} className="w-full h-full object-cover mb-4 rounded-lg" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.subcategoryName}</h2>
                                <p className="text-sm text-gray-600 mb-4"><span className="font-extrabold">Origins:</span> {item.origins.slice(0, 50)}...</p>
                                <div className="">
                                    <span className="text-md text-[#52c9af] font-bold"><span className="font-extrabold">Key Element:</span> {item.keyElements.slice(0, 50)}...</span><br />
                                    <Link to={`/IndivisualArtAndCraftsCategory/${item.subcategoryName}`}>
                                        <button className="bg-[#52c9af] text-white px-4 mt-10 py-2 rounded hover:bg-[#429b93] transition-colors duration-200 ease-in-out">View All {item.subcategoryName}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ArtAndCraftCategory;