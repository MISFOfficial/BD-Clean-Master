const ServiceGuide = () => {
    // ✅ Dummy data per service (can be fetched later from DB)
    const serviceName = "Home Cleaning";

    const guides = {
        "Home Cleaning": {
            checklist: [
                "Declutter surfaces for easier cleaning.",
                "Secure valuables and fragile items.",
                "Provide access to water and electricity.",
                "Keep pets in a separate room for safety.",
            ],
            aftercare: [
                "Keep windows open for ventilation.",
                "Avoid wet-mopping for 2–3 hours to let surfaces dry.",
                "Use mild cleaners for daily upkeep.",
                "Schedule deep cleaning every 3 months.",
            ],
        },
        "Office Cleaning": {
            checklist: [
                "Inform employees about cleaning schedule.",
                "Clear desks of confidential documents.",
                "Unplug sensitive electronics where possible.",
                "Ensure elevator or stair access for cleaning team.",
            ],
            aftercare: [
                "Maintain weekly light cleaning for longevity.",
                "Use sanitized wipes for shared surfaces daily.",
                "Check air filters and ventilation regularly.",
                "Rebook monthly deep cleaning for hygiene.",
            ],
        },
        "Carpet & Upholstery": {
            checklist: [
                "Vacuum carpets before our team arrives.",
                "Move small furniture out of the way.",
                "Point out stains that need special attention.",
                "Keep children/pets away from the area.",
            ],
            aftercare: [
                "Avoid stepping on carpet until fully dry.",
                "Use furniture protectors to prevent stains.",
                "Vacuum weekly to maintain freshness.",
                "Book professional cleaning every 6–12 months.",
            ],
        },
    };

    const serviceGuide = guides[serviceName];

    if (!serviceGuide) return null;

    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center">
                Prep Checklist & Aftercare
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Checklist */}
                <div className="secondery-color-2 p-6 rounded-2xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">✅ Prep Checklist</h3>
                    <ul className="list-disc pl-6 space-y-2 text-light-dark">
                        {serviceGuide.checklist.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Aftercare */}
                <div className="secondery-color-2 p-6 rounded-2xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">🧴 Aftercare Guidance</h3>
                    <ul className="list-disc pl-6 space-y-2 text-light-dark">
                        {serviceGuide.aftercare.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceGuide;
