import { FaStar } from 'react-icons/fa';

const ratings = [
    {
        id: 5,
        name: 'Emma Brown',
        profilePic: 'https://via.placeholder.com/40',
        rating: 3.5,
        heading: 'Decent Stay',
        description: 'The stay was decent overall, though there were a few minor issues.',
    },
    {
        id: 6,
        name: 'Michael Johnson',
        profilePic: 'https://via.placeholder.com/40',
        rating: 5.0,
        heading: 'Excellent Experience',
        description: 'Absolutely loved the place! Everything was perfect.',
    },
    {
        id: 7,
        name: 'Sophia Lee',
        profilePic: 'https://via.placeholder.com/40',
        rating: 4.2,
        heading: 'Comfortable Stay',
        description: 'Comfortable and cozy environment. Enjoyed my time there.',
    },
    {
        id: 8,
        name: 'Ethan Clark',
        profilePic: 'https://via.placeholder.com/40',
        rating: 4.8,
        heading: 'Great Location',
        description: 'Perfect location with easy access to nearby attractions.',
    },
    // Add more ratings as needed
];

const RatingItem = ({ rating }) => (
    <div className="flex items-start mb-4 p-2 py-5 rounded shadow-sm">
        <div className="flex-1">
            <div className="flex justify-between items-center p-2">
                <div className='flex'>
                    <img src={rating.profilePic} alt={`${rating.name}'s profile`} className="w-10 h-10 rounded-full mr-4" />
                    <h4 className="font-semibold">{rating.name}</h4>
                </div>
                <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">{rating.rating}</span>
                    <FaStar className="text-yellow-500" />
                </div>
            </div>

            <div className='p-2'>
                <h5 className="font-semibold mt-1">{rating.heading}</h5>
                <p className="text-gray-600">{rating.description}</p>
            </div>
        </div>
    </div>

);

    const ReviewsRating = () => {
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h3 className="text-xl md:text-2xl p-4 font-bold mb-4">Rating & Reviews</h3>
            <div className="h-64 overflow-y-scroll grid grid-cols-1 md:grid-cols-2 gap-4 border border-1 rounded-md">
                {ratings.map((rating) => (
                    <RatingItem key={rating.id} rating={rating} />
                ))}
            </div>

            <div className='flex justify-center md:justify-start my-5 px-4'>
                <button className='bg-[#1e324a] text-white p-3 rounded-lg mt-2'>Write a Review</button>
            </div>
        </div>
    );
};

export default ReviewsRating;
