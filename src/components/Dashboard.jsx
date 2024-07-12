/* eslint-disable no-unused-vars */
import React from 'react';
import tick from '../assets/tick.svg';
import InputContainer from './InputContainer';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <div className="w-full mt-16 lg:p-16">
            <div className="p-4 space-y-8 text-start">
                <div className="w-full p-3 lg:p-0">
                    <h1 className="text-2xl sm:text-4xl mb-2">Sell or Rent your Property For Free</h1>
                    <p>Whether you are ready to sell or looking for answers, we&apos;ll guide you with the data and expertise specific to your needs</p>
                </div>

                <div className="w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-0 md:p-8">
                    <div className="w-full p-3 lg:p-0 lg:w-full space-y-4 text-lg">
                        <h2 className="text-lg md:text-2xl font-semibold mb-4">Upload your property in 4 simple steps</h2>
                        <div className="text-sm sm:text-[18px] flex items-start items-center space-x-2">
                            <img src={tick} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                            <p>Add your properties <b> Basic details </b> </p>
                        </div>
                        <div className="text-sm sm:text-[18px] flex items-start items-center space-x-2">
                            <img src={tick} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                            <p>Add property <b>Location</b></p>
                        </div>
                        <div className="text-sm sm:text-[18px] flex items-start items-center space-x-2">
                            <img src={tick} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                            <p>Add property<b> Features and Amenities </b> </p>
                        </div>
                        <div className="text-sm sm:text-[18px] flex items-start items-center space-x-2">
                            <img src={tick} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                            <p>Add <b>Price details</b></p>
                        </div>
                        <div className="text-sm sm:text-[18px] flex items-start items-center space-x-2">
                            <img src={tick} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                            <p>Add your best <b>Property shots</b></p>
                        </div>
                    </div>

                    <div className="flex justify-end xl:justify-center w-full lg:w-full mt-4 lg:mt-0">
                        <InputContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
