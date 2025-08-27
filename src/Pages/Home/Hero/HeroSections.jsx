import { Link } from "react-router";

const HeroSections = () => {

    return (
        <div className="min-h-[70vh] content-center">
            {/* Text Content */}
            <div className="w-full text-light place-items-center text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
                    Sparkling Clean Homes & Offices, <br /> One Booking Away
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-light max-w-2xl mx-auto lg:mx-0">
                    Book professional cleaning services online in minutes. Real-time updates, trusted workers, and top-notch hygiene guaranteed.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4">
                    <Link
                        to="/book"
                        className="px-6 py-3 rounded-lg  secondery-color text-dark "
                    >
                        Book a Cleaning
                    </Link>
                    <Link
                        to="/pricing"
                        className="px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSections;