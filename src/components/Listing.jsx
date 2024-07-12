/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ListingNav from './ListingNav';
import PropertyDetail from './PropertyDetail';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ageState, amenitiesState, availabilityState, balconyState, bathroomsState, bedroomState, carpetSizeState, descState, electricState, facilityState, facingState, floorState, furnishingState, nonVegState, petState, safeState, tenantState, totalFloorState, typeState, waterState } from '../atom';
import { useNavigate } from 'react-router-dom';
import LocationDetail from './LocationDetail';
import Feature from './Feature';
import PriceDetails from './PriceDetails';
import PropertyImages from './PropertyImages';
import Overlay from './Overlay';

const Listing = () => {
    const [activeOption, setActiveOption] = useState(1);
    const [flag, setFlag] = useState(0)

    const [type, setType] = useRecoilState(typeState)
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

    const pet = useRecoilValue(petState);
    const veg = useRecoilValue(nonVegState);
    const electric = useRecoilValue(electricState);
    const water = useRecoilValue(waterState);
    const furnish = useRecoilValue(furnishingState)
    const safe = useRecoilValue(safeState)

    const setFeatures = useSetRecoilState(amenitiesState);
    const [current, setCurrent] = useState(0)
    const setFacility = useSetRecoilState(facilityState)
    const facility = useRecoilValue(facilityState)

    const validateFields = () => {
        if (current === 0) {
            if (
                type &&
                carpetSize &&
                totalFloor &&
                floor &&
                facing &&
                age &&
                bhk &&
                bath &&
                balcony &&
                tenant &&
                avail &&
                des
            ) {
                setFacility([])
                setFeatures([])
                setFacility((facility) => [...facility, bhk])
                setFacility((facility) => [...facility, bath])
                setFacility((facility) => [...facility, carpetSize])
                setFacility((facility) => [...facility, floor])
                setFacility((facility) => [...facility, totalFloor])
                setFacility((facility) => [...facility, facing])
                setFacility((facility) => [...facility, balcony])
                setFacility((facility) => [...facility, tenant])
                setFacility((facility) => [...facility, avail])
                setFacility((facility) => [...facility, age])
                setFacility((facility) => [...facility, type])

                setFlag(1)
                return true
            } else {
                setFlag(0)
                return false
            }
        }
        else if (current === 1) {
            if (location === 1) {
                setFlag(1)
                return true
            }
        }
        else if (current === 2) {
            if (pet && veg && electric && water && furnish) {
                setFacility((facility) => [...facility, pet])
                setFacility((facility) => [...facility, veg])
                setFacility((facility) => [...facility, electric])
                setFacility((facility) => [...facility, water])
                setFacility((facility) => [...facility, furnish])
                setFlag(1)
                return true
            }
            else {
                alert("Enter all fields")
            }
        }
        else if (current === 3) {
            if (flag) {
                return 1;
            }
        }
        else if (current === 4) {
            if (flag) {
                return 1;
            }
        }
    };

    const [f1, setF1] = useState(0)
    const [f2, setF2] = useState(0)
    const [f3, setF3] = useState(0)
    const [f4, setF4] = useState(0)
    const [f5, setF5] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        const valid = validateFields()

        if (valid) {
            console.log("isme")
            setFlag(0)
            setActiveOption((prev) => prev + 1)
            if (!f1) {
                setF1(1)
                setCurrent(1)
                setFlag(0)
            }
            else if (!f2) {
                setF2(1)
                setCurrent(2)
                setFlag(0)
            }
            else if (!f3) {
                setF3(1)
                setCurrent(3)
                setFlag(0)
            }
            else if (!f4) {
                setF4(1)
                console.log("yaha aaya")
                setCurrent(4)
                setFlag(0)
            }
            else {
                setCurrent(5)
                alert("done")
            }
        }
        else {
            alert("enter all fields")
        }
    }

    const [overlay, setOverlay] = useState(0)
    const handleSubmit = () => {
        console.log(facility)
        setOverlay(1)
    }

    const [location, setLocation] = useState(0)

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {overlay ? (
                <Overlay setOverlay={setOverlay} />
            ) :
                <div className="bg-white rounded-xl w-5/6 sm:w-3/5 h-2/3 flex flex-col shadow-[0px_-2px_10px_rgba(0,0,0,0.1)]">
                    <ListingNav f1={f1} f2={f2} f3={f3} f4={f4} activeOption={activeOption} />

                    <div className='overflow-y-scroll'>
                        {current === 0 ? <PropertyDetail setFlag={setFlag} /> : <></>}
                        {current === 1 ? <LocationDetail setLocation={setLocation} /> : <></>}
                        {current === 2 ? <Feature /> : <></>}
                        {current === 3 ? <PriceDetails setFlag={setFlag} /> : <></>}
                        {current === 4 ? <PropertyImages setFlag={setFlag} /> : <></>}
                    </div>

                    <div className="text-gray-100 bg-[#122B49] text-xs sm:text-sm px-4 py-1 md:px-6 md:py-3 flex justify-between items-center rounded-b-lg">
                        <span>Need Help? <a href="tel:9999999999" className="font-semibold">Call 9999999999</a></span>
                        <button
                            className={`bg-[#1e324a] text-white px-4 py-1 md:px-10 md:py-2 rounded-lg ${current === 5 ? 'border border-1-white' : ''}`}
                            onClick={current !== 4 ? handleClick : handleSubmit}
                        >
                            {current !== 4 ? 'NEXT' : 'SAVE & POST'}
                        </button>
                    </div>
                </div>

            }
        </div>
    );
};

export default Listing;
