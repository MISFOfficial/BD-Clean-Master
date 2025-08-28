const SafetyInfo = () => {
    // ✅ Dummy data
    const serviceName = "Home Cleaning";

    const safetyPoints = [
        "All staff are trained in handling cleaning chemicals safely.",
        "Protective gloves, masks, and shoe covers are always used.",
        "Child & pet-safe practices are strictly followed.",
        "Surfaces are tested to avoid damage from strong agents.",
    ];

    const ecoOptions = [
        "Plant-based, biodegradable cleaning solutions.",
        "Non-toxic disinfectants approved by WHO.",
        "Essential oil-based air freshening (chemical-free).",
        "Reduced-water cleaning technology for sustainability.",
    ];

    return (
        <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-6">
                Safety & Eco-Friendly Cleaning
            </h2>

            <p className="text-center text-light-dark mb-8">
                Service: <span className="font-semibold">{serviceName}</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Safety Protocols */}
                <div className="secondery-color-2 p-6 rounded-2xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">🛡️ Safety Protocols</h3>
                    <ul className="list-disc pl-6 space-y-2 text-light-dark">
                        {safetyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>

                {/* Eco-friendly Options */}
                <div className="secondery-color-2 p-6 rounded-2xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">🌿 Eco-Friendly Options</h3>
                    <ul className="list-disc pl-6 space-y-2 text-light-dark">
                        {ecoOptions.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SafetyInfo;
