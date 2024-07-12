/* eslint-disable no-unused-vars */

import { useRecoilState, useSetRecoilState } from 'recoil';
import { typeState, carpetSizeState, totalFloorState, floorState, facingState, ageState, bedroomState, bathroomsState, balconyState, tenantState, availabilityState, descState, facilityState, spaceState, rentSaleState } from './../atom';
import { useState } from 'react';
const PropertyDetail = () => {
    const [type, setType] = useRecoilState(typeState)
    const [sale, setSale] = useRecoilState(rentSaleState)
    const [carpetSize, setCarpetSize] = useRecoilState(carpetSizeState)
    const [totalFloor, setTotalFloor] = useRecoilState(totalFloorState)
    const [floor, setFloor] = useRecoilState(floorState)
    const [facing, setFacing] = useRecoilState(facingState)
    const [age, setAge] = useRecoilState(ageState)
    const [bhk, setBhk] = useRecoilState(bedroomState)
    const [bath, setBath] = useRecoilState(bathroomsState)
    const [balcony, setBalcony] = useRecoilState(balconyState)
    const [tenant, setTenant] = useRecoilState(tenantState)
    const [avail, setAvail] = useRecoilState(availabilityState)
    const [des, setDes] = useRecoilState(descState)
    const [space, setSpace] = useRecoilState(spaceState)

    return (
        <div>
            <div id='inside-div' className="p-1 md:p-5">
                <form className="space-y-4 bg-white text-black">

                    <div className="text-sm lg:text-[16px] p-5">
                        <label className="block font-medium mb-1">
                            Property for <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
                            <label className="flex items-center">
                                <input onClick={() => setSale("Rent")} type="radio" name="userType" value="owner" className="form-radio" required />
                                <span className="ml-2">Rent</span>
                            </label>
                            <label className="flex items-center">
                                <input onClick={() => setSale("Sale")} type="radio" name="userType" value="builder" className="form-radio" required />
                                <span className="ml-2">Sale</span>
                            </label>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] p-5">
                        <label className="block font-medium mb-1">
                            Property type <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
                            <div className="flex flex-col">
                                <label className="flex items-center">
                                    <input
                                        onChange={(e) => { setType(e.target.value) }}
                                        type="radio"
                                        name="propType"
                                        value="Residential"
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Residential</span>
                                </label>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex items-center">
                                    <input
                                        onChange={(e) => setType(e.target.value)}
                                        type="radio"
                                        name="propType"
                                        value="Commercial"
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Commercial</span>
                                </label>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex items-center">
                                    <input
                                        onChange={(e) => setType(e.target.value)}
                                        type="radio"
                                        name="propType"
                                        value="Land / Plot"
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Land / Plot</span>
                                </label>
                            </div>
                        </div>
                        {type === 'Residential' && (
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-3">
                                <p
                                    onClick={() => setSpace("Flat/Apartment")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 rounded-full ${space === "Flat/Apartment" ? "bg-gray-200" : ""}`}
                                >
                                    Flat/Apartment
                                </p>
                                <p
                                    onClick={() => setSpace("House/Villa")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 rounded-full ${space === "House/Villa" ? "bg-gray-200" : ""}`}
                                >
                                    House/Villa
                                </p>
                            </div>
                        )}
                        {type === 'Commercial' && (
                            <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-4 gap-3">
                                <p
                                    onClick={() => setSpace("Office Space")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Office Space" ? "bg-gray-200" : ""}`}
                                >
                                    Office Space
                                </p>
                                <p
                                    onClick={() => setSpace("Co Working")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Co Working" ? "bg-gray-200" : ""}`}
                                >
                                    Co Working
                                </p>
                                <p
                                    onClick={() => setSpace("Restaurant/Cafe")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Restaurant/Cafe" ? "bg-gray-200" : ""}`}
                                >
                                    Restaurant/Cafe
                                </p>
                                <p
                                    onClick={() => setSpace("Shop/Showroom")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Shop/Showroom" ? "bg-gray-200" : ""}`}
                                >
                                    Shop/Showroom
                                </p>
                                <p
                                    onClick={() => setSpace("Industrial Building")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Industrial Building" ? "bg-gray-200" : ""}`}
                                >
                                    Industrial Building
                                </p>
                                <p
                                    onClick={() => setSpace("Industrial Shed")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Industrial Shed" ? "bg-gray-200" : ""}`}
                                >
                                    Industrial Shed
                                </p>
                                <p
                                    onClick={() => setSpace("Warehouse/Godown")}
                                    className={`flex justify-center cursor-pointer hover:bg-gray-200 border border-1 p-2 px-6 rounded-full ${space === "Warehouse/Godown" ? "bg-gray-200" : ""}`}
                                >
                                    Warehouse/Godown
                                </p>
                            </div>
                        )}

                    </div>



                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Build up Area <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="0 Sq.ft" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required />
                                </label>
                            </div>
                        </div>
                        <div className="w-fullonClick={(e) => setSpace()} ">
                            <label className="block text-md font-medium mb-1">
                                Carpet Area <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="0 Sq.ft" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setCarpetSize(e.target.value)} />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Property on Floor <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="Floor" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setFloor(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Total Floors <span className="text-red-500">*</span>
                            </label>
                            <div className="flex">
                                <label className="flex items-center w-full">
                                    <input type="number" placeholder="Total floors" name="userType" className="bg-white border border-1px-gray p-2 sm:p-3 w-full" required
                                        onChange={(e) => setTotalFloor(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-md font-medium mb-1">
                                Property facing <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="direction"
                                className="bg-white border border-1px-gray p-2 sm:p-3 w-full"
                                value={facing}
                                required
                                onChange={(e) => setFacing(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="North">North</option>
                                <option value="South">South</option>
                                <option value="East">East</option>
                                <option value="West">West</option>
                                <option value="North East">North East</option>
                            </select>

                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-1 gap-4 p-5">
                        <label className="block font-medium mb-1">
                            Property Age <span className="text-red-500">*</span>
                        </label>
                        <div className="w-full">
                            <div className="text-sm grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                                <p
                                    className={`flex items-center w-full border border-1px rounded-full p-0 py-2 lg:py-3 justify-center cursor-pointer hover:bg-gray-200
                                            ${age === "Less than 1 Year" ? "bg-gray-200" : ""}
                                        `}
                                    onClick={() => {
                                        setAge("Less than 1 Year")
                                    }
                                    }
                                >
                                    Less than 1 Year
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px rounded-full p-0 py-2 lg:py-3 justify-center cursor-pointer hover:bg-gray-200
                                        ${age === "1-3 Years" ? "bg-gray-200" : ""}
                                        `}
                                    onClick={() => {
                                        setAge("1-3 Years")
                                    }
                                    }
                                >
                                    1-3 Years
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px rounded-full p-0 py-2 lg:py-3 justify-center cursor-pointer hover:bg-gray-200
                                    ${age == "3-5 Years" ? "bg-gray-200" : ""}
                                `} onClick={() => {
                                        setAge("3-5 Years")
                                    }}
                                >
                                    3-5 Years
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px rounded-full p-0 py-2 lg:py-3 justify-center cursor-pointer hover:bg-gray-200
                                        ${age == "5-10 Years" ? "bg-gray-200" : ""}
                                    `}
                                    onClick={() => {
                                        setAge("5-10 Years")
                                    }}
                                >
                                    5-10 Years
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px rounded-full p-0 py-2 lg:py-3 justify-center cursor-pointer hover:bg-gray-200
                                        ${age == "Greater than 10 Years" ? "bg-gray-200" : ""}
                                    `}
                                    onClick={() => {
                                        setAge("Greater than 10 Years")
                                    }}
                                >
                                    Greater than 10 Year
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-1 gap-4 p-5">
                        <label className="block font-medium mb-1">
                            BHK Type <span className="text-red-500">*</span>
                        </label>
                        <div className="text-sm grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                            <p
                                className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bhk === "1 RK" ? "bg-gray-200" : ""}`}
                                onClick={() => setBhk("1 RK")}
                            >
                                1 RK
                            </p>
                            <p
                                className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bhk === "1 BHK" ? "bg-gray-200" : ""}`}
                                onClick={() => setBhk("1 BHK")}
                            >
                                1 BHK
                            </p>
                            <p
                                className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bhk === "2 BHK" ? "bg-gray-200" : ""}`}
                                onClick={() => setBhk("2 BHK")}
                            >
                                2 BHK
                            </p>
                            <p
                                className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bhk === "3 BHK" ? "bg-gray-200" : ""}`}
                                onClick={() => setBhk("3 BHK")}
                            >
                                3 BHK
                            </p>
                            <p
                                className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bhk === "4 BHK" ? "bg-gray-200" : ""}`}
                                onClick={() => setBhk("4 BHK")}
                            >
                                4 BHK
                            </p>
                            <p
                                className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bhk === "5+ BHK" ? "bg-gray-200" : ""}`}
                                onClick={() => setBhk("5+ BHK")}
                            >
                                5+ BHK
                            </p>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-1 gap-4 p-5">
                        <label className="block text-md font-medium mb-1">
                            Bathrooms <span className="text-red-500">*</span>
                        </label>
                        <div className="w-full">
                            <div className="text-sm grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bath === 1 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBath(1)}
                                >
                                    1
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bath === 2 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBath(2)}
                                >
                                    2
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bath === 3 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBath(3)}
                                >
                                    3
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bath === 4 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBath(4)}
                                >
                                    4
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bath === 5 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBath(5)}
                                >
                                    5
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${bath === 6 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBath(6)}
                                >
                                    6+
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-1 gap-4 p-5">
                        <label className="block text-md font-medium mb-1">
                            Balcony <span className="text-red-500">*</span>
                        </label>
                        <div className="w-full">
                            <div className="text-sm grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${balcony === 1 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBalcony(1)}
                                >
                                    1
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${balcony === 2 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBalcony(2)}
                                >
                                    2
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${balcony === 3 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBalcony(3)}
                                >
                                    3
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${balcony >= 4 ? "bg-gray-200" : ""}`}
                                    onClick={() => setBalcony(4)}
                                >
                                    4+
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-1 gap-4 p-5">
                        <label className="block text-md font-medium mb-1">
                            Tenant Preference <span className="text-red-500">*</span>
                        </label>
                        <div className="w-full">
                            <div className="text-sm grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${tenant === 'Any' ? "bg-gray-200" : ""}`}
                                    onClick={() => setTenant('Any')}
                                >
                                    Any
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${tenant === 'Family' ? "bg-gray-200" : ""}`}
                                    onClick={() => setTenant('Family')}
                                >
                                    Family
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${tenant === 'Bachelor (Man)' ? "bg-gray-200" : ""}`}
                                    onClick={() => setTenant('Bachelor (Man)')}
                                >
                                    Bachelor (Man)
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${tenant === 'Bachelor (Women)' ? "bg-gray-200" : ""}`}
                                    onClick={() => setTenant('Bachelor (Women)')}
                                >
                                    Bachelor (Women)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-1 gap-4 p-5">
                        <label className="block text-md font-medium mb-1">
                            Availability <span className="text-red-500">*</span>
                        </label>
                        <div className="w-full">
                            <div className="text-sm grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${avail === 'Immediate' ? "bg-gray-200" : ""}`}
                                    onClick={() => setAvail('Immediate')}
                                >
                                    Immediate
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${avail === 'Within 15 days' ? "bg-gray-200" : ""}`}
                                    onClick={() => setAvail('Within 15 days')}
                                >
                                    Within 15 days
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${avail === 'Within 1 month' ? "bg-gray-200" : ""}`}
                                    onClick={() => setAvail('Within 1 month')}
                                >
                                    Within 1 month
                                </p>
                                <p
                                    className={`flex items-center w-full border border-1px p-0 py-2 lg:py-3 rounded-full justify-center cursor-pointer hover:bg-gray-200 ${avail === 'Within 2 months' ? "bg-gray-200" : ""}`}
                                    onClick={() => setAvail('Within 2 months')}
                                >
                                    Within 2 months
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm lg:text-[16px] grid grid-cols-1 sm:grid-cols-1 gap-4 p-5">
                        <label className="block text-md font-medium mb-1">
                            Property Description <span className="text-red-500">*</span>
                        </label>
                        <div className="w-full">
                            <textarea onChange={(e) => setDes(e.target.value)} className="border border-1 bg-white shadow shadow-sm mb-4 w-full text-gray-700 p-4 focus:outline-none" placeholder="Add a description for your property to atrract best tenant" aria-label="Message" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default PropertyDetail;
