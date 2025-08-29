import { useState } from "react";
import { FaGoogle, FaLock, FaUser } from "react-icons/fa";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", formData);
        // Add login API logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center secondery-color px-6">
            <div className="w-full max-w-md secondery-color-2 shadow-lg rounded-2xl p-8">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-6 text-dark">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-light-dark mb-8">
                    Log in to manage your cleaning bookings
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 border border-gray-300 rounded-xl px-3 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 border border-gray-300 rounded-xl px-3 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full primary-color text-light py-3 rounded-xl font-semibold hover:opacity-90 transition"
                    >
                        Log In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-light-dark text-sm">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Google Login */}
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
                    <FaGoogle className="text-red-500" /> Continue with Google
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-light-dark mt-6">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-primary font-semibold hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
