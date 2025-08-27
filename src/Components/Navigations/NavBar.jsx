import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Pricing", path: "/pricing" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];
    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold primary-text">
                        BD Clean Master
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-gray-700 hover:primary-text transition ${isActive ? "font-semibold border-b-2 primary-border" : ""
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Login/Register */}
                        <Link
                            
                            className="px-4 py-2 rounded-lg border primary-border primary-text hover-primar-color-hover hover:text-white transition"
                        >
                            Login
                        </Link>

                        {/* CTA */}
                        <Link
                            
                            className="px-4 py-2 rounded-lg primary-color text-white primary-color-hover transition"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-2xl text-gray-700"
                        >
                            {open ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <div className="flex flex-col items-start px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `block text-gray-700 hover:primary-text transition ${isActive ? "font-semibold border-l-4 pl-2 primary-border" : ""
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <Link
                            
                            onClick={() => setOpen(false)}
                            className="w-full text-center px-4 py-2 rounded-lg border primary-border primary-text hover-primar-color-hover hover:text-white transition"
                        >
                            Login
                        </Link>

                        <Link
                            
                            onClick={() => setOpen(false)}
                            className="w-full text-center px-4 py-2 rounded-lg primary-color text-white "
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;