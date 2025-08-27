import { Link } from "react-router";
import { FaTimes } from "react-icons/fa";
import { FaSprayCanSparkles } from "react-icons/fa6";

const PromoBanner = ({
    // id = "promo-banner",
    message = "Monsoon Deep Clean",
    discountText = "15",
    // ctaLink = "/book",
    ctaText = "Book Now",
}) => {

    return (
        <div className="">
            <div >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
                    {/* Left content */}
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-full text-light  text-xl font-bold shadow-md  bg-[#ffffff46]  animate-pulse">
                            {discountText} % off
                            <FaSprayCanSparkles className="absolute -top-2 -right-2 text-yellow-300 animate-ping" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-light">
                                {message}
                            </h2>
                            <p className="text-sm md:text-base text-dim-light">
                                Limited time — Grab your offer today!
                            </p>
                        </div>
                    </div>

                    {/* CTA + Close */}
                    <div className="flex items-center gap-4">
                        <Link
                     
                            className="px-6 py-3 rounded-full secondery-color primary-text font-semibold shadow-lg hover:scale-105 transition-transform animate-bounce"
                        >
                            {ctaText}
                        </Link>
                        {/* <button
                            aria-label="Dismiss banner"
                            className="p-2 rounded-full hover:bg-white/20 transition"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
