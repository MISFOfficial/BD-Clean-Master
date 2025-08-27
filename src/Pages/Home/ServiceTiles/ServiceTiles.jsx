import { FaHome, FaBuilding, FaIndustry, FaVirus, FaCouch, FaWind, FaWater, FaTshirt } from "react-icons/fa";
import { Link } from "react-router";

const services = [
    { name: "Home Cleaning", icon: <FaHome />, link: "#" },
    { name: "Office Cleaning", icon: <FaBuilding />, link: "#" },
    { name: "Industrial Cleaning", icon: <FaIndustry />, link: "/services/industrial" },
    { name: "Disinfection", icon: <FaVirus />, link: "#" },
    { name: "Carpet / Upholstery", icon: <FaCouch />, link: "#" },
    { name: "Air Duct Cleaning", icon: <FaWind />, link: "#" },
    { name: "Water / Fire Recovery", icon: <FaWater />, link: "#" },
    { name: "Garments Factory", icon: <FaTshirt />, link: "#" },
];

const ServiceTiles = () => {
    return (
        <div className="">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
                Quick Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Link
                        to={service.link}
                        key={index}
                        className="flex flex-col items-center p-6 secondery-color-2 shadow-sm rounded-2xl text-center"
                    >
                        <div className="text-4xl mb-4 primary-text">{service.icon}</div>
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServiceTiles;
