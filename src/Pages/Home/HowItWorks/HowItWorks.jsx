import { FaClipboardList, FaCheckCircle, FaBroom, FaStar } from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Book Your Service",
            desc: "Choose your cleaning type and schedule online in just a few clicks.",
            icon: <FaClipboardList className="w-12 h-12 text-primary" />,
        },
        {
            id: 2,
            title: "Get Confirmation",
            desc: "Receive instant confirmation with details of your assigned cleaner.",
            icon: <FaCheckCircle className="w-12 h-12 text-primary" />,
        },
        {
            id: 3,
            title: "We Clean",
            desc: "Our professionals arrive on time with all necessary equipment.",
            icon: <FaBroom className="w-12 h-12 text-primary" />,
        },
        {
            id: 4,
            title: "Enjoy & Relax",
            desc: "Sit back and enjoy a sparkling clean space, hassle-free!",
            icon: <FaStar className="w-12 h-12 text-primary" />,
        },
    ];

    return (
        <div className=" text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                How It Works
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Get your home, office, or factory cleaned in just a few simple steps.
            </p>

            {/* Steps */}
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition"
                    >
                        <h1 className="primary-text">{step.icon}</h1>
                        <h3 className="mt-4 text-xl font-semibold text-dark">
                            {step.title}
                        </h3>
                        <p className="mt-3 text-light-dark">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
