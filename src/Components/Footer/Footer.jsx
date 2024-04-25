import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-[#cfebe5] py-5 text-center text-black">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Contact Us</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1234567890</p>
                        <p>Address: 123 Main Street, City, Country</p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Follow Us</h3>
                        <ul className="flex justify-center space-x-4">
                            <li>
                                <a href="#" className="text-[#3d9e89] hover:text-[#1e463d]">
                                <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#3d9e89] hover:text-[#1e463d]">
                                <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#3d9e89] hover:text-[#1e463d]">
                                <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#3d9e89] hover:text-[#1e463d]">
                                <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                        <form className="flex justify-center items-center">
                            <input type="email" placeholder="Enter your email" className="bg-white border border-gray-300 rounded-l px-4 py-2 focus:outline-none" />
                            <button type="submit" className="bg-[#3d9e89] text-white px-4 py-2 rounded-r hover:bg-[#1e463d] focus:outline-none">Subscribe</button>
                        </form>
                    </div>

                    {/* Site Map */}
                    <div>
                        <h3 className="text-lg font-bold mb-3">Site Map</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-sm">
                <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
