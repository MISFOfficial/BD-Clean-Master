import { Link } from "react-router";
import { motion } from "framer-motion";//eslint-disable-line no-unused-vars
import { FaHome } from "react-icons/fa";


const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800 px-6">

            {/* Animated 404 */}
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-9xl font-extrabold primary-text drop-shadow-lg"
            >
                404
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-4 text-2xl font-semibold"
            >
                Oops! Page not found
            </motion.p>

            {/* Description */}
            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-2 text-center max-w-md"
            >
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </motion.p>

            {/* Back to Home */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="mt-8"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg primary-color text-white font-medium shadow-lg primary-color-hover transition"
                >
                    <FaHome /> Back to Home
                </Link>
            </motion.div>
        </div>
    );
};

export default Error;