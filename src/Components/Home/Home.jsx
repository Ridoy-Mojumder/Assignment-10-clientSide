import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BannerSection from "./BannerSection";
import { Fade } from "react-awesome-reveal";
import ContactUs from "../ContactUs/ContactUs";
import Team from "../Team/Team";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const loadedArtAndCraft = useLoaderData();

    // Simulate a loading delay (you can remove this in a real-world scenario)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            <BannerSection />
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[#52c9af]" />
                </div>
            ) : (
                <>
                    <Fade cascade damping={0.2}>
                        <div className="max-w-5xl mx-auto my-10">
                            <h1 className="text-3xl font-semibold text-[#52c9af] my-10 text-center">Gallery Showcase</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {loadedArtAndCraft.slice(0, 6).map((item, index) => (
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Fade>
                    <Fade cascade damping={0.2}>
                        <Team />
                        <ContactUs />
                    </Fade>
                </>
            )}
        </div>
    );
};

export default Home;
