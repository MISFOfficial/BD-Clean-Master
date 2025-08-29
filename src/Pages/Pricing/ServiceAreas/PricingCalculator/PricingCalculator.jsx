import { useState } from "react";
import { useNavigate } from "react-router";

const PricingCalculator = () => {
    const navigate = useNavigate();

    // base price per sq.ft
    const pricePerSqFt = 8; // example: 8 BDT per sq.ft

    // add-ons pricing
    const addonsPricing = {
        "Inside Fridge Cleaning": 500,
        "Inside Oven Cleaning": 400,
        "Balcony Wash": 600,
        "Inside Cupboard": 300,
    };

    const [formData, setFormData] = useState({
        size: "",
        addons: [],
        coupon: "",
    });

    const [total, setTotal] = useState(0);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prev) => {
                const newAddons = checked
                    ? [...prev.addons, value]
                    : prev.addons.filter((item) => item !== value);
                return { ...prev, addons: newAddons };
            });
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const calculateTotal = () => {
        let base = (parseFloat(formData.size) || 0) * pricePerSqFt;

        let addonsCost = formData.addons.reduce(
            (sum, addon) => sum + addonsPricing[addon],
            0
        );

        let subtotal = base + addonsCost;

        // coupon logic
        let discount = 0;
        if (formData.coupon.toLowerCase() === "save10") {
            discount = subtotal * 0.1; // 10% off
        }

        setTotal(subtotal - discount);
    };

    return (
        <div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Pricing & Calculator
            </h2>

            {/* Transparent Pricing Table */}
            <div className="overflow-x-auto mb-12">
                <table className="w-full ">
                    <thead className="primary-color text-light">
                        <tr>
                            <th className="p-3 border border-gray-300">Service</th>
                            <th className="p-3 border border-gray-300">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border border-gray-300">General Cleaning</td>
                            <td className="p-3 border border-gray-300">{pricePerSqFt} BDT / sq.ft</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Inside Fridge Cleaning</td>
                            <td className="p-3 border border-gray-300">500 BDT</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Inside Oven Cleaning</td>
                            <td className="p-3 border border-gray-300">400 BDT</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Balcony Wash</td>
                            <td className="p-3 border border-gray-300">600 BDT</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Inside Cupboard</td>
                            <td className="p-3 border border-gray-300">300 BDT</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Calculator Form */}
            <div className="secondery-color-2 bg-opacity-95 shadow-lg rounded-2xl p-8 ">
                <h3 className="text-xl font-semibold mb-6 text-center">
                    Estimate Your Cost
                </h3>

                {/* Size */}
                <input
                    type="number"
                    name="size"
                    placeholder="Enter size in sq.ft"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                />

                {/* Add-ons */}
                <div className="mb-4">
                    <h4 className="font-medium mb-2">Add-ons:</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.keys(addonsPricing).map((addon, idx) => (
                            <label key={idx} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={addon}
                                    checked={formData.addons.includes(addon)}
                                    onChange={handleChange}
                                    className="accent-primary"
                                />
                                <span>{addon} (+{addonsPricing[addon]} BDT)</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Calculate Button */}
                <button
                    onClick={calculateTotal}
                    className="w-full primary-color text-light py-3 rounded-xl font-semibold"
                >
                    Calculate
                </button>

                {/* Result */}
                {total > 0 && (
                    <div className="mt-6 text-center text-lg font-bold text-green-600">
                        Estimated Total: {total} BDT
                    </div>
                )}
            </div>

            {/* Proceed to Booking Button */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => navigate("/book-now")}
                    className="px-8 py-3 primary-color text-light cursor-pointer font-semibold rounded-xl hover:scale-105 transform transition duration-300"
                >
                    Proceed to Booking →
                </button>
            </div>
        </div>
    );
};

export default PricingCalculator;
