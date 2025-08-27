import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa";

const HeaderTop = () => {
    return (
        <div className="text-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

                {/* Left: Social Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                    <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                    <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                    <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
                </div>

                {/* Right: Phone Number */}
                <div>
                    <a href="tel:+8801234567890" className=" flex items-center gap-2">
                        <FaPhone></FaPhone> +880 1234 567890
                    </a>
                </div>

            </div>
        </div>
    );
};

export default HeaderTop;
