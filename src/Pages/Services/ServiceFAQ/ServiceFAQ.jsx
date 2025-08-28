import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ServiceFAQ = () => {
    // ✅ Dummy FAQs
    const faqs = [
        {
            question: "How long does a typical home cleaning take?",
            answer: "A standard home cleaning usually takes 3–4 hours depending on the size of the house.",
        },
        {
            question: "Do I need to provide cleaning supplies?",
            answer: "Our team brings all necessary eco-friendly cleaning supplies. You just need to provide water access.",
        },
        {
            question: "Can I schedule a cleaning for weekends?",
            answer: "Yes, we operate 7 days a week, including weekends and public holidays.",
        },
        {
            question: "Are your workers insured?",
            answer: "Yes, all our cleaning staff are fully insured and trained in safety protocols.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text dark text-center mb-12">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="secondery-color-2 shadow-sm rounded-2xl p-5 cursor-pointer border border-gray-100 hover:shadow-sm transition"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg md:text-xl font-medium text-gray-800">
                                {faq.question}
                            </h3>
                            {openIndex === index ? (
                                <FaChevronUp className="text dark" />
                            ) : (
                                <FaChevronDown className="text dark" />
                            )}
                        </div>
                        {openIndex === index && (
                            <p className="mt-3 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default ServiceFAQ;
