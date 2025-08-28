import { useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const BookNowWidget = () => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        address: "",
        size: "",
        addons: [],
    });

    const addonsList = [
        "Inside Fridge Cleaning",
        "Inside Oven Cleaning",
        "Balcony Wash",
        "Inside Cupboard",
    ];

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", formData);
        alert("Booking submitted! (Check console for data)");
        // Here you can integrate with backend API
    };

    return (
        <div className="flex flex-row-reverse  gap-10">
            <div className=" w-full flex-1 hidden lg:block border-6 primary-border rounded-2xl">
                <img
                    src="https://go-2-girls.com/wp-content/uploads/2021/12/The-Ultimate-Living-Room-Cleaning-Checklist.jpg"
                    alt="Cleaning Service"
                    className="w-full h-full object-center rounded-lg"
                />
            </div>
            <div className="max-w-md mx-auto secondery-color-2 shadow-lg rounded-2xl p-8 flex-1">
                <h2 className="text-2xl font-bold primary-text mb-6 text-center">
                    Book Now
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Date */}
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="primary-text" />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-2">
                        <FaClock className="primary-text" />
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="primary-text" />
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {/* Size / Area */}
                    <div>
                        <input
                            type="text"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            placeholder="Size (e.g., 1200 sq.ft.)"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {/* Add-ons */}
                    <div className="border-t border-gray-100 pt-4">
                        <h3 className="font-semibold mb-2">Add-ons:</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {addonsList.map((addon, idx) => (
                                <label key={idx} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="addons"
                                        value={addon}
                                        checked={formData.addons.includes(addon)}
                                        onChange={handleChange}
                                        className="accent-primary"
                                    />
                                    <span className="text-dark">{addon}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-4 py-3 primary-color text-light rounded-xl font-semibold"
                    >
                        Submit Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookNowWidget;
