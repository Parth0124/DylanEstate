import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <div className='text-white bg-[#122b49]'>
            <div className="max-w-screen-2xl mx-auto p-6 md:flex md:justify-between border-b-2 border-gray-100">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-3xl text-[#f5dbc2] font-bold">
                        <img src={logo} alt="" className='w-16 md:w-24' />
                        Dylan Estate
                    </h2>
                </div>
                <div className="text-xs md:text-sm mb-6 md:my-10 md:mb-0 md:flex md:space-x-20">
                    <div>
                        <ul>
                            <li><a href="#" className=" hover:underline">Home</a></li>
                            <li><a href="#" className=" hover:underline">Properties</a></li>
                            <li><a href="#" className=" hover:underline">List Your Property</a></li>
                            <li><a href="#" className=" hover:underline">Saved Searches</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#" className=" hover:underline">About Mira Road</a></li>
                            <li><a href="#" className=" hover:underline">Emi Calculator</a></li>
                            <li><a href="#" className=" hover:underline">Testimonials</a></li>
                            <li><a href="#" className=" hover:underline">Explore Neighborhood</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#" className=" hover:underline">About us</a></li>
                            <li><a href="#" className=" hover:underline">Contact Us</a></li>
                            <li><a href="#" className=" hover:underline">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mb-6 md:my-10">
                    <div className='pb-4'>
                        <h2 className='text-sm lg:text-lg'>CONTACT US</h2>
                        <p className='text-gray-300 text-xs'>B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti</p>
                    </div>
                    <div className='pb-4'>
                        <h2 className='text-sm lg:text-lg'>OFFICE HOURS</h2>
                        <p className='text-gray-300 text-xs'>B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti</p>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl text-xs mx-auto p-6 md:flex md:justify-between md:text-sm text-gray-300">
                <div>
                    <p>© 2024 Dylan Estates. All rights reserved. Dylan Estates - Your Neighborhood Experts</p>
                    <div className="mt-3 lg:mt-0">
                        <a href="#" className="text-gray-300 underline">Privacy Policy</a> | 
                        <a href="#" className="text-gray-300 underline"> Terms & Conditions</a>
                    </div>
                </div>
                <div className="md:flex md:items-center md:space-x-4">
                    <div className="flex items-center">
                        <span className="text-white">Language:</span>
                        <a href="#" className="text-white underline ml-2">English (IN)</a>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0">
                        <span className="text-white">Currency:</span>
                        <a href="#" className="text-white underline ml-2">₹ INR</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer