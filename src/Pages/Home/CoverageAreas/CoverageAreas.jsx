import { Link } from "react-router";

/**
 * CoverageAreas.jsx
 * - Shows Dhaka as primary coverage city with a small map (iframe)
 * - Lists popular service areas / neighborhoods
 * - Responsive layout
 *
 * Note: Replace the iframe with Google Maps JS API or react-google-maps
 * for interactivity (markers, polygons, geofencing) when you integrate the API.
 */

const neighborhoods = [
    "Gulshan",
    "Banani",
    "Dhanmondi",
    "Mirpur",
    "Uttara",
    "Mohammadpur",
    "Motijheel",
    "Bashundhara",
];

export default function CoverageAreas() {
    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-dark">Coverage Areas</h2>
                    <p className="mt-2 text-light-dark max-w-xl">
                        We’re launching in Dhaka first — serving many neighborhoods across the city.
                        Select an area to check available services or request coverage for your location.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        
                        className="inline-block px-4 py-2 rounded-md primary-color text-white font-medium  transition"
                    >
                        View All Services
                    </Link>
                    <Link
                        className="inline-block px-4 py-2 rounded-md border border-primary text-dark"
                    >
                        Request Coverage
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Map (left/top on mobile) */}
                <div className="lg:col-span-2">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                        {/* Google Maps iframe centered on Dhaka */}
                        <iframe
                            title="Dhaka map"
                            width="100%"
                            height="360"
                            loading="lazy"
                            className="block"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365062.3808314372!2d90.27923826194729!3d23.78088750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6b7d1c7c6c1%3A0x7a9a3a3b3b3b3b3b!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1660000000000!5m2!1sen!2sus"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* <p className="mt-3 text-sm text-light-dark">
                        Note: This is a simple embedded map for demonstration. For an interactive map with markers, service polygons and geofencing,
                        replace this iframe with <span className="font-medium">Google Maps JavaScript API</span> or a React wrapper (e.g. <code>@react-google-maps/api</code>).
                    </p> */}
                </div>

                {/* Neighborhood list & CTA (right on desktop) */}
                <aside className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Dhaka — Popular Areas</h3>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {neighborhoods.map((n) => (
                            <li
                                key={n}
                                className="px-3 py-2 rounded-md hover:bg-primary hover:text-white transition cursor-pointer border border-gray-100 text-gray-800 text-sm"
                            >
                                <Link>{n}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <Link
                            to="/#"
                            className="block text-center px-4 py-2 rounded-md primary-color text-light font-medium  "
                        >
                            See Full Coverage Map
                        </Link>
                    </div>

                    <div className="mt-4 text-xs text-light-dark">
                        Can't find your area? <Link to="/#" className="text-dark underline">Request coverage</Link>.
                    </div>
                </aside>
            </div>
        </div>
    );
}
