
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

const faqs = [
    {
        question: "How do I book a cleaning service?",
        answer: "You can book online via our website. Choose your service, schedule a date, and confirm your booking in minutes.",
    },
    {
        question: "Are the cleaners trained and verified?",
        answer: "Yes! All cleaners go through background checks, training, and adhere to strict safety and hygiene protocols.",
    },
    {
        question: "What areas do you cover in Dhaka?",
        answer: "We cover major neighborhoods including Gulshan, Banani, Dhanmondi, Mirpur, Uttara, Mohammadpur, Motijheel, Bashundhara.",
    },
    {
        question: "Is the service insured?",
        answer: "Absolutely. All our services are insured and bonded. Any accidental damage is fully covered under our guarantee.",
    },
];

const FaqPreview = () => {
    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dark">Frequently Asked Questions</h2>
                <p className="mt-3 text-light-dark max-w-2xl mx-auto">
                    Answers to the most common questions from our clients.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.slice(0, 4).map((faq, idx) => (
                    <div
                        key={idx}
                        className="secondery-color-2 p-6 rounded-2xl shadow-md "
                    >
                        <h3 className="text-lg font-semibold text-dark">{faq.question}</h3>
                        <p className="mt-2 text-light-dark">{faq.answer}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <Link
                    to="/faq"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold primary-color text-light"
                >
                    See Full FAQ <FaChevronRight />
                </Link>
            </div>
        </div>
    );
};

export default FaqPreview;
