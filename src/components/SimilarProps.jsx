
const properties = [
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D',
        title: 'Luxury Villa with Pool',
        address: 'Juhu, Mumbai',
        price: '₹2.5 Crores',
        size: '2500 sq.ft',
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D',
        title: 'Beachfront Condo',
        address: 'Marine Drive, Mumbai',
        price: '₹3 Crores',
        size: '1800 sq.ft',
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D',
        title: 'Designer Penthouse',
        address: 'Worli, Mumbai',
        price: '₹4 Crores',
        size: '3000 sq.ft',
    },
    {
        id: 9,
        image: 'https://media.istockphoto.com/id/185321544/photo/beautiful-house-in-florida.webp?b=1&s=170667a&w=0&k=20&c=zWhzLotP8zCtQd-7ktPt3rGjWul7pxzR1EO7qRW2keY=',
        title: 'Seaside Cottage',
        address: 'Versova, Mumbai',
        price: '₹1.2 Crores',
        size: '1200 sq.ft',
    },
    {
        id: 10,
        image: 'https://media.istockphoto.com/id/1272163106/photo/large-house-with-steep-roof-and-side-entry-three-car-garage.webp?b=1&s=170667a&w=0&k=20&c=KeRhxIpGx0MZakssoHIVmbEbvp5gNdjxYaxyBWDlu5Y=',
        title: 'City Center Apartment',
        address: 'Colaba, Mumbai',
        price: '₹2 Crores',
        size: '1500 sq.ft',
    },
    // Add more properties as needed
];

const PropertyCard = ({ property }) => (
    <div className="flex-shrink-0 w-60 p-4 m-2 mr-6 bg-white rounded-md shadow-md">
        <img src={property.image} alt={property.title} className="w-full h-40 object-cover rounded" />
        <div className="py-4">
            <h3 className="mt-2 text-lg md:text-base sm:text-sm font-semibold">{property.title}</h3>
            <p className="text-gray-600 text-base md:text-sm sm:text-xs">{property.address}</p>
            <p className="mt-1 text-gray-800 font-bold text-base md:text-sm sm:text-xs">{property.price}</p>
            <p className="text-gray-600 text-base md:text-sm sm:text-xs">{property.size}</p>
        </div>
    </div>
);

const SimilarProps = () => {
    return (
        <div className="p-4 bg-[#fdfaf7]">
            <h3 className="p-4 text-xl md:text-2xl font-semibold mb-4">Similar Properties In Mira Road</h3>
            <div className="flex overflow-x-scroll scrollbar-hide border border-gray-100 md:border-none rounded-lg">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default SimilarProps;
