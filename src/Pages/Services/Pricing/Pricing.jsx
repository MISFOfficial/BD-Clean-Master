import { FaPlusCircle } from "react-icons/fa";

const Pricing = () => {
    // ✅ Dummy data with duration & team size
    const pricingPlans = [
        {
            id: 1,
            title: "Home Cleaning",
            basePrice: 2000,
            perSqFt: 10,
            type: "per sq.ft.",
            description: "Perfect for small to medium homes.",
            duration: "3 - 4 hours",
            teamSize: "2 - 3 cleaners",
        },
        {
            id: 2,
            title: "Office Cleaning",
            basePrice: 5000,
            perSqFt: 8,
            type: "per sq.ft.",
            description: "Best for office and co-working spaces.",
            duration: "5 - 6 hours",
            teamSize: "4 - 5 cleaners",
        },
        {
            id: 3,
            title: "Carpet & Upholstery",
            basePrice: 1500,
            perSqFt: null,
            type: "fixed",
            description: "Deep cleaning of carpets & upholstery.",
            duration: "2 - 3 hours",
            teamSize: "2 cleaners",
        },
    ];

    const addons = [
        { id: 1, name: "Inside Fridge Cleaning", price: 500 },
        { id: 2, name: "Inside Oven Cleaning", price: 700 },
        { id: 3, name: "Balcony Wash", price: 400 },
        { id: 4, name: "Inside Cupboard", price: 600 },
    ];

    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
                Pricing, Duration & Add-ons
            </h2>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className="secondery-color-2 shadow-sm rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl primary-text font-semibold mb-2">
                            {plan.title}
                        </h3>
                        <p className="text-light-dark mb-4">{plan.description}</p>
                        <p className="text-lg font-bold primary-text mb-2">
                            ৳ {plan.basePrice}{" "}
                            {plan.perSqFt && (
                                <span className="text-light-dark text-sm">
                                    + ৳{plan.perSqFt}/{plan.type}
                                </span>
                            )}
                        </p>

                        {/* Duration & Team Size */}
                        <div className="text-sm text-light-dark mt-3 space-y-1">
                            <p><span className="font-semibold text-dark">Duration:</span> {plan.duration}</p>
                            <p><span className="font-semibold text-dark">Team Size:</span> {plan.teamSize}</p>
                        </div>

                        <button className="mt-6 px-5 py-2 primary-color text-light rounded-lg font-medium ">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Add-ons */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold text-center mb-8">
                    Add-ons
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {addons.map((addon) => (
                        <div
                            key={addon.id}
                            className="flex flex-col items-center secondery-color-2 border border-gray-100 rounded-xl p-5 shadow hover:shadow-lg transition"
                        >
                            <FaPlusCircle className="primary-text text-3xl mb-3" />
                            <h4 className="font-medium">{addon.name}</h4>
                            <p className="text-light-dark">৳ {addon.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
