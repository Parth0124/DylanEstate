import { useRecoilValue } from 'recoil';
import { rentState } from '../atom';
import { depositState } from './../atom';

const PreviewInquiry = () => {
    const rent = useRecoilValue(rentState)
    const deposit = useRecoilValue(depositState)

    return (
        <div className="max-w-md mx-auto mt-3 md:mt-20 lg:mt-22 mb-5">
            <div className='bg-[#f6efe6] flex text-gray-800 justify-around mb-5'>
                <div className="px-6 py-4 flex flex-col text-center">
                    <div className="font-bold mb-2 text-lg md:text-xl">₹ {rent} / Month</div>
                    <div className="text-sm">(Rent-Negotiable)</div>
                </div>
                <div className="px-6 py-4 flex flex-col text-center">
                    <div className="font-bold mb-2 text-lg md:text-xl">₹ {deposit}</div>
                    <div className="text-sm">(Deposit)</div>
                </div>
            </div>

            <div className="px-6 py-4 bg-[#fdfaf7] shadow-xl overflow-hidden text-gray-800">
                <h2 className="font-bold text-lg mb-2">Send an Inquiry for this property?</h2>
                <p className="text-gray-700 text-sm mb-4">Contact Person : Melvin Lasrado</p>
                <div className="flex items-center border border-gray-300 rounded-md bg-white p-2 font-semibold">
                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1m4 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-8-4h.01M7 6h.01M17 6h.01M21 10h-1M3 14h18M3 18h18"></path>
                    </svg>
                    <p className="w-full text-gray-700 px-2" >+91-9999999999</p>
                </div>

                <input className="appearance-none bg-white shadow shadow-sm my-4 rounded-md px-3 w-full text-gray-700 p-2 mb-4 leading-tight focus:outline-none text-sm md:text-md" type="text" placeholder="Name" aria-label="Name" />
                <input className="appearance-none bg-white shadow shadow-sm mb-4 rounded-md px-3 w-full text-gray-700 p-2 mb-4 leading-tight focus:outline-none text-sm md:text-md" type="email" placeholder="Email" aria-label="Email" />
                
                <div className="flex mb-4">
                    <span className="flex items-center p-2 pl-3 bg-white font-semibold text-gray-600 border border-gray-300 rounded-l-sm text-sm md:text-md"> +91</span>
                    <input className="appearance-none bg-white shadow shadow-sm ml-2 rounded-md w-full text-gray-700 py-1 px-2 text-sm md:text-md leading-tight focus:outline-none" type="number" placeholder="999-999-9999" aria-label="Mobile Number" />
                </div>

                <textarea className="appearance-none bg-white shadow shadow-sm mb-4 w-full text-gray-700 p-4 mt-4 text-sm md:text-md leading-tight focus:outline-none" placeholder="I would like more information about Sector 5, shanti nagar, anubhav society" aria-label="Message" />
                <button className="w-full bg-[#1e324a] hover:bg-[#1e124a] text-white py-2 px-4 rounded mt-4">SEND INQUIRY</button>
            </div>
        </div>
    );
}

export default PreviewInquiry