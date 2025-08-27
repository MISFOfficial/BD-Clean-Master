import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Ahmed",
        role: "Homeowner – Gulshan, Dhaka",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        review:
            "BD Clean Master was fantastic! My apartment looks spotless. The staff arrived on time, were professional, and used eco-friendly products. Highly recommend!",
    },
    {
        name: "Imran Khan",
        role: "Office Manager – Banani",
        img: "https://randomuser.me/api/portraits/men/36.jpg",
        rating: 4,
        review:
            "We booked a deep office cleaning, and the team exceeded expectations. Only small delay in starting, but overall excellent service.",
    },
    {
        name: "Nusrat Jahan",
        role: "Garments Factory Owner – Savar",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        review:
            "Their industrial cleaning service was very thorough. They followed safety protocols strictly, and my factory environment feels safer and cleaner.",
    },
];

const Testimonials = () => {
    return (
        <div>
            {/* Header */}
            <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-primary">What Our Clients Say</h2>
                <p className="mt-3 text-light-dark max-w-2xl mx-auto">
                    Real reviews from satisfied homeowners, office managers, and industrial clients across Dhaka.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="secondery-color-2 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-2"
                    >
                        {/* Profile */}
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={t.img}
                                alt={t.name}
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{t.name}</p>
                                <p className="text-sm text-light-dark">{t.role}</p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex mb-3">
                            {[...Array(t.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                            ))}
                            {[...Array(5 - t.rating)].map((_, i) => (
                                <FaStar key={i} className="text-gray-300 w-5 h-5" />
                            ))}
                        </div>

                        {/* Review */}
                        <p className="text-light-dark italic leading-relaxed">“{t.review}”</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-14 text-center">
                <button className="px-8 py-3 rounded-xl primary-color text-light font-semibold shadow-md">
                    Read More Reviews
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
