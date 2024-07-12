import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight,faSolarPanel, faShieldAlt, faCamera, faParking, faWater, faPlug, faBolt, faUsers, faTree, faChild, faBicycle, faDumbbell, faHome, faShoppingCart, faSwimmer, faPhone, faFireExtinguisher, faBuilding, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useSetRecoilState } from 'recoil';
import { amenitiesState } from '../atom';

const amenities = [
  { name: "24/7 Security", icon: faShieldAlt },
  { name: "CCTV Camera", icon: faCamera },
  { name: "Lift", icon: faArrowUp },
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

const Feature3 = () => {
  const setFeatures = useSetRecoilState(amenitiesState);

  const handleClick = (e, amenityName) => {
    setFeatures((prev) => {
      if (e.target.checked) {
        return [...prev, amenityName];
      } else {
        return prev.filter((amenity) => amenity !== amenityName);
      }
    });
  };

  return (
    <div className="p-5 my-3">
      <h2 className="block text-md font-medium mb-5">Society Amenities</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {amenities.map((amenity, index) => (
          <label key={index} className="flex items-center flex-col my-3">
            <FontAwesomeIcon icon={amenity.icon} className="mb-2 h-6 w-6" />
            <span className="ml-2 mb-2 text-xs text-gray-400 sm:text-md">{amenity.name}</span>
            <input 
              type="checkbox" 
              value={amenity.name} 
              onClick={(e) => handleClick(e, amenity.name)} 
              className="ml-2" 
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Feature3;
