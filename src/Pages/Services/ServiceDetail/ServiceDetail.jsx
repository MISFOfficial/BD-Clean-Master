import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ServiceDetail = () => {
    // ✅ Dummy data (replace later with real data)
    const title = "Home Cleaning Service";
    const description =
        "Our professional home cleaning service ensures your home is spotless, hygienic, and comfortable. Perfect for families, bachelors, and busy professionals.";

    const included = [
        "Sweeping, mopping, and vacuuming floors",
        "Dusting and wiping surfaces",
        "Kitchen cleaning (sink, counters, exterior of appliances)",
        "Bathroom cleaning (toilets, sinks, mirrors, showers)",
        "Garbage collection & disposal",
    ];

    const notIncluded = [
        "Deep cleaning of carpets & upholstery",
        "Laundry & ironing",
        "Dishwashing",
        "Moving heavy furniture",
        "Exterior window cleaning",
    ];

    return (
        <div>
            {/* Service Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h1>
            <p className="text-dark mb-10">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Included */}
                <div>
                    <h2 className="text-2xl font-semibold text-green mb-4">What's Included</h2>
                    <ul className="space-y-3">
                        {included.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <FaCheckCircle className="text-green mt-1" />
                                <span className="text-dark">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Not Included */}
                <div>
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">What's Not Included</h2>
                    <ul className="space-y-3">
                        {notIncluded.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <FaTimesCircle className="text-red mt-1" />
                                <span className="text-dark">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 primary-color text-light rounded-lg font-medium ">
                    Book Now
                </button>
                <button className="px-6 py-3 border-2 text-primary rounded-lg font-medium primary-border primary-text ">
                    Get a Quote
                </button>
            </div>
        </div>
    );
};

export default ServiceDetail;
