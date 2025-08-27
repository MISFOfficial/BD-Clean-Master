import { FaShieldAlt, FaCertificate, FaMedal, FaHandsHelping, FaTruck, FaClipboardCheck } from "react-icons/fa";
import { Link } from "react-router";

const certifications = [
    { name: "ISO 9001", img: "https://upload.wikimedia.org/wikipedia/commons/7/70/ISO_9001-2015.svg" },
    { name: "Health & Safety", img: "https://cdn-icons-png.flaticon.com/512/942/942799.png" },
    { name: "EcoSafe", img: "https://cdn-icons-png.flaticon.com/512/2909/2909765.png" },
];

const TrustSection = () => {
    return (
        <div>

            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-dark">Trusted & Safe Cleaning</h2>
                <p className="mt-3 text-light-dark max-w-2xl mx-auto">
                    We follow strict protocols, use eco-friendly products, and maintain full insurance to give you peace of mind.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* Certifications */}
                <div className="secondery-color rounded-2xl p-6 shadow-sm h-full ">
                    <h3 className="text-xl font-semibold text-dark mb-4">Certifications</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        {certifications.map((c) => (
                            <div key={c.name} className="flex items-center gap-3 secondery-color p-3 rounded-lg shadow-sm">
                                <img src={c.img} alt={c.name} className="w-12 h-12 object-contain" />
                                <div>
                                    <div className="text-sm font-medium text-dark">{c.name}</div>
                                    <div className="text-xs text-dark-dark">Verified</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-light-dark">
                        All certifications are verified during onboarding. We continuously train our teams to follow the latest safety standards.
                    </p>
                </div>

                {/* Safety Protocols */}
                <div className="primary-dim-color text-dark rounded-2xl p-6 shadow-lg h-full">
                    <h3 className="text-xl font-semibold text-dark mb-4">Safety Protocols</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-start">
                            <span className="mt-1 primary-text"><FaClipboardCheck /></span>
                            <div>
                                <p className="font-medium text-dark">Pre-service Checklist</p>
                                <p className="text-sm text-light-dark">All cleaners follow a standardized checklist before and after each job.</p>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="mt-1 primary-text"><FaHandsHelping /></span>
                            <div>
                                <p className="font-medium text-dark">Background-checked Staff</p>
                                <p className="text-sm text-light-dark">Every worker completes ID verification and local background checks.</p>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="mt-1 primary-text"><FaShieldAlt /></span>
                            <div>
                                <p className="font-medium text-dark">Hygiene & PPE</p>
                                <p className="text-sm text-light-dark">Mandatory PPE, sanitation protocols, and safe chemical handling for all teams.</p>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="mt-1 primary-text"><FaTruck /></span>
                            <div>
                                <p className="font-medium text-dark">Equipment Safety</p>
                                <p className="text-sm text-light-dark">Regular maintenance of machines & certified disposal for hazardous waste.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Insured & Bonded */}
                <div className="secondery-color rounded-2xl p-6 shadow-md h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-full bg-primary/10 primary-text">
                                <FaMedal className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-dark">Insured & Bonded</h3>
                        </div>
                        <p className="text-light-dark mb-4">
                            BD Clean Master is fully insured and bonded. In the unlikely event of accidental damage or loss, customers are protected under our service guarantee.
                        </p>
                        <ul className="text-sm text-light-dark space-y-2">
                            <li className="flex gap-2 items-start"><span className="primary-text">•</span> Public liability insurance coverage for all services.</li>
                            <li className="flex gap-2 items-start"><span className="primary-text">•</span> Clear claims process with timely resolution.</li>
                            <li className="flex gap-2 items-start"><span className="primary-text">•</span> Fully documented proof-of-service and photos on request.</li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <Link  className="inline-block w-full text-center px-4 py-3 rounded-lg primary-color text-light font-bold">
                            Learn About Our Safety Standards
                        </Link>
                        <Link to="/#" className="inline-block w-full text-center mt-3 px-4 py-3 rounded-lg border-2 primary-border font-bold  primary-text ">
                            Request Service — Get Insured
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustSection;
