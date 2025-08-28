const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            before: "https://i0.wp.com/homecleaningsg.com/wp-content/uploads/2022/11/how-to-keep-your-kitchen-sink-clean-in-5-easy-steps.jpg?fit=640%2C427&ssl=1",
            after: "https://irp.cdn-website.com/5c6e5e14/dms3rep/multi/Maria-s+Cleaning+home_h1.webp?dm-skip-opt=true",
            title: "Living Room Cleaning",
        },
        {
            id: 2,
            before: "https://i0.wp.com/homecleaningsg.com/wp-content/uploads/2022/11/how-to-keep-your-kitchen-sink-clean-in-5-easy-steps.jpg?fit=640%2C427&ssl=1",
            after: "https://irp.cdn-website.com/5c6e5e14/dms3rep/multi/Maria-s+Cleaning+home_h1.webp?dm-skip-opt=true",
            title: "Kitchen Deep Clean",
        },
        {
            id: 3,
            before: "https://i0.wp.com/homecleaningsg.com/wp-content/uploads/2022/11/how-to-keep-your-kitchen-sink-clean-in-5-easy-steps.jpg?fit=640%2C427&ssl=1",
            after: "https://irp.cdn-website.com/5c6e5e14/dms3rep/multi/Maria-s+Cleaning+home_h1.webp?dm-skip-opt=true",
            title: "Bathroom Sanitization",
        },
    ];

    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Before & After Gallery</h2>
                <p className="mt-3 text-light-dark max-w-2xl mx-auto">
                    See the transformation our professional cleaning services provide.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {galleryItems.map((item) => (
                    <div key={item.id} className="overflow-hidden rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition primary-color">
                        <div className="relative">
                            <img src={item.before} alt={`${item.title} Before`} className="w-full h-64 object-cover" />
                            <span className="absolute top-2 left-2 bg-red-500 text-light px-3 py-1 rounded-full text-sm font-semibold">Before</span>
                        </div>
                        <div className="relative mt-2">
                            <img src={item.after} alt={`${item.title} After`} className="w-full h-64 object-cover" />
                            <span className="absolute top-2 left-2 bg-green-500 text-light px-3 py-1 rounded-full text-sm font-semibold">After</span>
                        </div>
                        <h3 className="text-lg font-semibold text-center mt-4 mb-4 text-light ">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
