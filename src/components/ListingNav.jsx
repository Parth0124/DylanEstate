/* eslint-disable no-unused-vars */

const ListingNav = ({f1, f2, f3, f4, f5, activeOption}) => {  

    return (
        <div>
            <div className="text-xs lg:text-base flex justify-between">
                <div
                    className={`flex-1 text-center rounded-tl-xl font-xl py-6 cursor-pointer 
                        ${activeOption === 1 ? 'bg-[#edf2f8] text-gray-800 shadow-inner-custom' : 'bg-[#fcf8f4] text-[#7a7a7a]'
                        } ${f1 == 1 ? 'text-gray-800 border-b-8 border-[#122B49]' : 'border-b-8 border-[#d6d6d6]' } `
                    
                    }
                >
                    Property Details
                </div>
                <div
                    className={`flex-1 text-center font-xl py-6 cursor-pointer
                        ${activeOption === 2 ? 'bg-[#edf2f8] text-gray-800 shadow-inner-custom' : 'bg-[#fcf8f4] text-[#7a7a7a]'
                        } ${f2 == 1 ? 'text-gray-800 border-b-8 border-[#122B49]' : 'border-b-8 border-[#d6d6d6]' } `
                    
                    }
                >
                    Location Details
                </div>
                <div
                    className={`flex-1 text-center font-xl py-6 cursor-pointer
                        ${activeOption === 3 ? 'bg-[#edf2f8] text-gray-800 shadow-inner-custom' : 'bg-[#fcf8f4] text-[#7a7a7a]'
                        } ${f3 == 1 ? 'text-gray-800 border-b-8 border-[#122B49]' : 'border-b-8 border-[#d6d6d6]' } `
                    
                    }
                >
                    Feautres & Amenities
                </div>
                <div
                    className={`flex-1 text-center font-xl py-6 cursor-pointer
                        ${activeOption === 4 ? 'bg-[#edf2f8] text-gray-800 shadow-inner-custom' : 'bg-[#fcf8f4] text-[#7a7a7a]'
                        } ${f4 == 1 ? 'text-gray-800 border-b-8 border-[#122B49]' : 'border-b-8 border-[#d6d6d6]' } `
                    
                    }
                >
                    Price Details
                </div>
                <div
                    className={`flex-1 text-center rounded-tr-lg font-xl py-6 cursor-pointer
                        ${activeOption === 5 ? 'bg-[#edf2f8] text-gray-800 shadow-inner-custom' : 'bg-[#fcf8f4] text-[#7a7a7a]'
                        } ${f5 == 5 ? 'text-gray-800 border-b-8 border-[#122B49]' : 'border-b-8 border-[#d6d6d6]' } `
                    
                    }
                >
                    Property Images
                </div>
            </div>
        </div>
    )
}

export default ListingNav