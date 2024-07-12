/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { amenitiesState, areaState, buildingState, cityState, streetState } from '../atom'

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
})

const LocationDetail = ({setLocation}) => {
  const [building, setBuilding] = useRecoilState(buildingState)
  const [area, setArea] = useRecoilState(areaState)
  const [street, setStreet] = useRecoilState(streetState)
  const [city, setCity] = useRecoilState(cityState)
  const setFeatures = useSetRecoilState(amenitiesState)
  const [position, setPosition] = useState([51.505, -0.09]) // Default position for the map

  useEffect(() => {
    if (city && building && area && street) {
      setLocation(1)
      // Example: setting position based on some logic
      setPosition([51.505, -0.09]) // You can update this to dynamic coordinates based on the input values
    }
  }, [city, building, area, street])

  useEffect(() => {
    setFeatures([])
  }, [])

  return (
    <div className='p-4'>
      <form className="text-sm sm:text-[15.6px] space-y-4 bg-white text-black">

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
          <div className="p-2 w-full">
            <label className="block font-medium mb-1">
              Building/ Society Name <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center w-full">
                <input type="text" placeholder="Enter Apartment Name" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                  onChange={(e) => setBuilding(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="p-2 w-full">
            <label className="block font-medium mb-1">
              Locality / Area <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center w-full">
                <input type="text" placeholder="Eg : Sheetal Nagar" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                  onChange={(e) => setArea(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
          <div className="p-2 w-full">
            <label className="block text-md font-medium mb-1">
              Landmark/ Street Name <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center w-full">
                <input type="text" placeholder="Prominent Landmark" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                  onChange={(e) => setStreet(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="p-2 w-full">
            <label className="block text-md font-medium mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center w-full">
                <input type="text" placeholder="Enter City" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-xl p-5 mb-4'>Mark locality on Map</h2>
          <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </form>
    </div>
  )
}

export default LocationDetail
