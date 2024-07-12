/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { facilityState } from '../atom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined, faBuilding, faLayerGroup, faCompass, faDoorOpen, faCouch, faUserFriends, faThLarge, faClock, faTint, faPaw, faDrumstickBite, faBolt, faCalendarAlt, faHome, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const propertyDetails = [
    { name: "", label: "Bedrooms", icon: faBed },
    { name: "", label: "Bathrooms", icon: faBath },
    { name: "", label: "Sq. Ft.", icon: faRulerCombined },
    { name: "", label: "Property on Floor", icon: faBuilding },
    { name: "", label: "Total Floors", icon: faLayerGroup },
    { name: "", label: "Facing", icon: faCompass },
    { name: "", label: "Balcony", icon: faDoorOpen },
    { name: "", label: "Tenant Preference", icon: faUserFriends },
    { name: "", label: "Availability", icon: faClock },
    { name: "", label: "Property Age", icon: faCalendarAlt },
    { name: "", label: "Property Type", icon: faHome },
    { name: "", label: "Pets Allowed", icon: faPaw },
    { name: "", label: "Non-Veg", icon: faDrumstickBite },
    { name: "", label: "Electricity Status", icon: faBolt },
    { name: "", label: "Water Supply", icon: faTint },
    { name: "", label: "Furnishing", icon: faCouch },
    { name: "Yes", label: "Gated Security", icon: faShieldAlt }
];

const PropertyOverview = () => {
    const facilities = useRecoilValue(facilityState)
    for (let i = 0; i < propertyDetails.length-1 && i < facilities.length; i++) {
        propertyDetails[i].name = facilities[i];
    }

    useEffect(() => {
        console.log(facilities)
    }, [])

    return (
        <div className="p-4 shadow rounded">
            <div className='flex items-center justify-between p-4'>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Property Overview</h2>
                <p className='mb-2 text-gray-400'>Society : Gokul Village</p>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 md:p-4">
                {propertyDetails.map((detail, index) => (
                    <div key={index} className="flex items-center flex-row justify-start my-3">
                        <FontAwesomeIcon icon={detail.icon} className="mb-2 h-6 w-6" />
                        <div className='flex items-start flex-col justify-start'>
                            <span className="text-sm md:text-md lg:text-lg p-3 font-semibold">{detail.name}</span>
                            <span className="ml-2 text-xs text-gray-400 sm:text-md">{detail.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PropertyOverview
