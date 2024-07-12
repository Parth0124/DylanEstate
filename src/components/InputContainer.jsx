/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const countries = [
    "United States", "Canada", "Mexico", "United Kingdom", "Australia",
    "India", "China", "Japan", "Germany", "France", "Italy", "Spain",
];

const InputContainer = () => {
    const [showOTPInput, setShowOTPInput] = useState(false);
    const [otp, setOtp] = useState("");
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        userType: '',
        name: '',
        country: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleNextClick = () => {
        if (formData.userType && formData.name && formData.country && formData.phone && formData.email) {
            if (showOTPInput) {
                if (otp.length >= 4) {
                    navigate("/dylanEstate/list")
                }
                else {
                    alert("Enter Otp")
                }
            }
            else {
                setShowOTPInput(true);
            }
        } else {
            console.log(formData.userType)
            console.log(formData.name)
            console.log(formData.country)
            console.log(formData.phone)
            console.log(formData.email)
            alert('Please fill in all required fields.');
        }
    };

    return (
        <div className="bg-white rounded-lg w-full lg:w-3/4 h-auto lg:h-96 flex flex-col">
            <h2 className="px-5 py-4 xl:px-10 text-lg xl:text-xl font-semibold bg-[#FCF8F4] text-[#122B49] sticky rounded-t-lg">LETS GET YOU STARTED !</h2>
            <div className="overflow-y-auto flex-grow xl:p-5">
                {!showOTPInput ?
                    (
                        <form className="space-y-4 text-sm md:text-[17px] bg-white text-black">
                            <div className="p-5">
                                <label className="block font-medium mb-1">
                                    I am <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="userType"
                                            value="owner"
                                            className="form-radio"
                                            required
                                            onChange={handleInputChange}
                                        />
                                        <span className="ml-2 md:ml-4">Owner</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="userType"
                                            value="builder"
                                            className="form-radio"
                                            required
                                            onChange={handleInputChange}
                                        />
                                        <span className="ml-2 md:ml-4">Builder</span>
                                    </label>
                                </div>
                            </div>
                            <div className="p-5">
                                <label className="block font-medium mb-1">
                                    Your Name <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded bg-white text-black" placeholder="Name" onChange={handleInputChange} required />
                            </div>
                            <div className="p-5">
                                <label className="block font-medium mb-1">
                                    Country <span className="text-red-500">*</span>
                                </label>
                                <select name="country" className="w-full p-2 border border-gray-300 rounded bg-white text-black" onChange={handleInputChange} required>
                                    <option value="">Select Country</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="p-5">
                                <label className="block font-medium mb-1">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="phone" className="w-full p-2 border border-gray-300 rounded bg-white text-black" placeholder='000-000-0000' onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="px-5">
                                OR
                            </div>
                            <div className="p-5">
                                <label className="block font-medium mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input type="email" name="email" placeholder="example@example.com" className="w-full p-2 border border-gray-300 rounded bg-white text-black" onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </form>

                    ) : (
                        <div className="p-5 flex text-sm lg:text-[16px] xl:text-lg flex-col items-center">
                            <div className='flex justify-between w-full mb-4'>
                                <p className="block text-gray-800 font-medium">Enter OTP sent on {formData.phone} <span className="text-red-500">*</span> </p>
                                <p className='text-sm text-[#122B49] underline'>Change</p>
                            </div>
                            <input onChange={(e) => setOtp(e.target.value)} type="number" className="w-full p-2 border border-gray-300 rounded bg-white text-black mb-4" placeholder="0 0 0 0 0" required />
                            <div className='flex justify-end w-full'>
                                <button className="text-sm text-[#122B49] py-2 items-end">Resend OTP</button>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="text-sm xl:text-[13px] bg-gray-100 text-[#122B49] p-4 flex justify-between items-center rounded-b-lg">
                <span>Need Help? <a href="tel:9999999999" className="text-[#122B49] font-semibold">Call 9999999999</a></span>
                <button className="bg-[#122B49] xl:text-[15px] text-white px-8 py-2 rounded-lg" onClick={handleNextClick}>NEXT</button>
            </div>
        </div>
    );
}

export default InputContainer;
