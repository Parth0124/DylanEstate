import React, { useState } from 'react';
import { FaHeart, FaShare } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { areaState, bedroomState, buildingState, carpetSizeState, cityState, descState, imgState, rentSaleState, spaceState, streetState, typeState } from '../atom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';

const PreviewDetail = () => {
    const img = useRecoilValue(imgState);
    const type = useRecoilValue(typeState);
    const bhk = useRecoilValue(bedroomState);
    const desc = useRecoilValue(descState);
    const sale = useRecoilValue(rentSaleState);
    const space = useRecoilValue(spaceState);
    const building = useRecoilValue(buildingState);
    const area = useRecoilValue(areaState);
    const street = useRecoilValue(streetState);
    const city = useRecoilValue(cityState);
    const carpet = useRecoilValue(carpetSizeState);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='text-gray-800 p-6 bg-white flex flex-col shadow-md rounded w-full mt-20 lg:mt-22 mx-auto h-fit'>
            <div className='w-full flex justify-between items-start mb-4'>
                <h2 className='text-md md:text-xl lg:text-2xl font-semibold text-center'>{bhk} {space} for {sale} in {building} ({carpet} Sq.ft) </h2>
            </div>
            <div className='flex justify-between mb-3 items-center'>
                <div>
                    <p className='text-sm md:text-md text-gray-800'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='pr-1 md:w-4 h-4' /> {building}, {area}, {street}, {city}
                    </p>
                </div>
                <div className='flex space-x-4'>
                    <button className='shadow shadow-md p-2 rounded-full text-red-500'>
                        <FaHeart size={24} style={{ color: 'darkblue' }} className='w-3 h-3 sm:w-5 sm:h-5' />
                    </button>
                    <button className='shadow shadow-md p-2 rounded-full text-blue-500'>
                        <FaShare size={24} style={{ color: 'darkblue' }} className='w-3 h-3 sm:w-5 sm:h-5' />
                    </button>
                </div>
            </div>

            <div className="carousel w-full relative overflow-hidden">
                {img.map((image, index) => (
                    <div key={index} id={`item${index + 1}`} className={`carousel-item w-full ${index === activeIndex ? 'active' : ''}`}>
                        <img
                            src={image}
                            className="w-full"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
                <div className="absolute left-0 right-0 flex justify-center gap-2 py-2 bottom-0">
                    {img.map((_, index) => (
                        <a
                            key={index}
                            href={`#item${index + 1}`}
                            onClick={() => handleItemClick(index)}
                            className={`btn btn-xs ${index === activeIndex ? 'active' : ''}`}
                        >
                            {index + 1}
                        </a>
                    ))}
                </div>
            </div>

            <div className='mt-4 text-sm md:text-md text-gray-600'>Property ID: 12345</div>
        </div>
    )
}

export default PreviewDetail;
