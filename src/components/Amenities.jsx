/* eslint-disable no-unused-vars */
import React from 'react'
import { amenitiesState } from '../atom'
import { useRecoilValue } from 'recoil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalkingArrowRight,faSolarPanel,faShieldAlt, faCamera, faCar, faParking, faWater, faPlug, faBolt, faUsers, faTree, faChild, faBicycle, faDumbbell, faHome, faShoppingCart, faSwimmer, faPhone, faFireExtinguisher, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Amenities = () => {
    const amenities = [
        { name: "24/7 Security", icon: faShieldAlt },
        { name: "CCTV Camera", icon: faCamera },
        { name: "Lift", icon: faCar },
        { name: "Reserved Parking", icon: faParking },
        { name: "Regular water supply", icon: faWater },
        { name: "Power Back up-Partial", icon: faPlug },
        { name: "Power Back up-Full", icon: faBolt },
        { name: "Maintenance staff", icon: faUsers },
        { name: "Garden/ Park", icon: faTree },
        { name: "Kids Play area", icon: faChild },
        { name: "Sport", icon: faBicycle },
        { name: "Property Gym", icon: faDumbbell },
        { name: "Community Hall", icon: faHome },
        { name: "Shopping center", icon: faShoppingCart },
        { name: "Club House", icon: faBuilding },
        { name: "Swimming pool", icon: faSwimmer },
        { name: "Intercom", icon: faPhone },
        { name: "Fire Safety", icon: faFireExtinguisher },
        { name: "Solar Facilities", icon: faSolarPanel },
        { name: "Fire Exit", icon:  faPersonWalkingArrowRight }
    ];

    const facilities = useRecoilValue(amenitiesState)
    const filteredAmenities = amenities.filter(amenity => facilities.includes(amenity.name));

    return (
        <div className="p-4 shadow rounded">
            <h2 className="text-xl md:text-2xl font-bold mb-4 p-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:p-4">
                {filteredAmenities.map((amenity, index) => (
                    <label key={index} className="flex items-center flex-col my-3">
                        <FontAwesomeIcon icon={amenity.icon} className="mb-2 h-6 w-6" />
                        <span className="ml-2 mb-2 text-xs text-gray-400 sm:text-md">{amenity.name}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Amenities