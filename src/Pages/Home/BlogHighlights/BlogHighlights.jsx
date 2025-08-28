import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const blogs = [
    {
        id: 1,
        title: "10 Essential Cleaning Tips for a Healthier Home",
        excerpt:
            "Discover simple yet effective cleaning practices to keep your living space fresh, healthy, and safe for your family.",
        image: "https://maidsailors.com/wp-content/uploads/2019/03/amazon-prime-home-cleaning-index-1531749851-848x480.gif",
    },
    {
        id: 2,
        title: "Why Professional Disinfection Matters in Monsoon",
        excerpt:
            "Learn how seasonal deep cleaning and disinfection can protect your home from harmful germs and damp-related issues.",
        image: "https://brunascleaningservice.com/wp-content/uploads/2024/06/woman-vacuuming-floor-with-cordless-hand-vacuum-cleaner-kitchen-1-scaled.jpg",
    },
    {
        id: 3,
        title: "Carpet & Upholstery Care: Do’s and Don’ts",
        excerpt:
            "Understand the best practices to extend the life of your carpets and furniture while maintaining a clean environment.",
        image: "https://www.bobvila.com/wp-content/uploads/2024/06/how-to-clean-a-stainless-steel-sink_scrub-sink.jpg?strip=all&quality=85&w=1200",
    },
];

const BlogHighlights = () => {
    return (
        <div >
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary">Cleaning Tips & Hygiene Awareness</h2>
                <p className="mt-3 text-light-dark max-w-2xl mx-auto">
                    Practical advice, cleaning hacks, and hygiene awareness to keep your spaces sparkling clean and safe.
                </p>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="secondery-color-2 rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-dark">{blog.title}</h3>
                            <p className="mt-3 text-light-dark">{blog.excerpt}</p>
                            <Link
                                to={`/blog/${blog.id}`}
                                className="mt-4 inline-flex items-center text-primary font-semibold hover:underline"
                            >
                                Read More <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
                <Link
                    to="/blog"
                    className="px-6 py-3 rounded-full primary-color text-light font-semibold"
                >
                    View All Articles
                </Link>
            </div>
        </div>
    );
};

export default BlogHighlights;
