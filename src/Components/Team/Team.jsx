
import { Fade } from 'react-awesome-reveal';

const Team = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-center text-[#331A15] mb-8">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Team member card */}
                    <Fade direction="up" cascade>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://i.ibb.co/Fbxyg8V/graphics-designer-editor-workplace-concept-53876-54940.jpg" alt="Team Member" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#52c9af] mb-2">Aopo Das</h3>
                                <p className="text-gray-600 mb-2">CEO</p>
                                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </Fade>

                    {/* Repeat the above card structure for other team members */}
                    <Fade direction="down" cascade>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://i.ibb.co/sCnmv7J/creative-painter-shares-artistic-process-bustling-studio-1258-279457.jpg" alt="Team Member" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#52c9af] mb-2">Ridoy Mojumder</h3>
                                <p className="text-gray-600 mb-2">Oil Painter</p>
                                <p className="text-sm text-gray-700">Harnessing centuries-old techniques, infusing canvases with vibrant pigments, immortalizing moments in layers of color and depth.</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="up" cascade>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://i.ibb.co/9VJ17ww/elegant-beautiful-girl-painting-field-1157-25392.jpg" alt="Team Member" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#52c9af] mb-2">Nitima Roy</h3>
                                <p className="text-gray-600 mb-2">Landscape Painter</p>
                                <p className="text-sm text-gray-700">Landscape Painting Designer: Capturing nature's essence on canvas, blending colors to narrate serene tales of boundless beauty.</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="down" cascade>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://i.ibb.co/rb00KtY/woman-looking-side-with-canvas-her-legs-1157-2313.jpg" alt="Team Member" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#52c9af] mb-2">Bristy Roy</h3>
                                <p className="text-gray-600 mb-2">Water Painter</p>
                                <p className="text-sm text-gray-700">Dancing delicately on paper, blending hues to form ethereal landscapes, each stroke a whisper of fluid beauty, capturing fleeting moments .</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Team;
