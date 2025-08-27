import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">BD Clean Master</h2>
                        <p className="text-gray-200">
                            Professional cleaning services for homes, offices, and industries in Bangladesh. Trusted, efficient, and hygienic.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
                            <li><Link to="/services" className="hover:text-gray-300 transition">Services</Link></li>
                            <li><Link to="/pricing" className="hover:text-gray-300 transition">Pricing</Link></li>
                            <li><Link to="/blog" className="hover:text-gray-300 transition">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><Link to="/services/home" className="hover:text-gray-300 transition">Home Cleaning</Link></li>
                            <li><Link to="/services/office" className="hover:text-gray-300 transition">Office Cleaning</Link></li>
                            <li><Link to="/services/industrial" className="hover:text-gray-300 transition">Industrial Cleaning</Link></li>
                            <li><Link to="/services/disinfection" className="hover:text-gray-300 transition">Disinfection</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter & Social */}
                    <div>
                        <h3 className="font-semibold mb-4">Subscribe</h3>
                        <p className="text-gray-200 mb-4">Get latest updates and cleaning tips.</p>
                        <div className="flex gap-2 mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 rounded-l-lg w-full border text-light"
                            />
                            <button className="bg-white text-dark px-4 py-2 rounded-r-lg font-semibold transition">
                                Subscribe
                            </button>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
                            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
                            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-400" />

                {/* Copyright */}
                <p className="text-center text-gray-300 pb-8">
                    &copy; {new Date().getFullYear()} BD Clean Master. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
