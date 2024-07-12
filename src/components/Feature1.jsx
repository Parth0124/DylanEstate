import {  useSetRecoilState } from "recoil";
import { electricState, nonVegState, petState, waterState } from "../atom";

const Feature1 = () => {
  const setPet = useSetRecoilState(petState);
  const setVeg = useSetRecoilState(nonVegState);
  const setElectric = useSetRecoilState(electricState);
  const setWater = useSetRecoilState(waterState);

  const handleNonVegChange = (e) => {
    setVeg(e.target.value);
  };

  const handlePetChange = (e) => {
    setPet(e.target.value);
  };

  const handleElectricChange = (e) => {
    setElectric(e.target.value);
  };

  const handleWaterChange = (e) => {
    setWater(e.target.value);
  };

  return (
    <div>
      <div className="p-5 block text-sm lg:text-[16px] font-semibold mb-1">
        General Features
      </div>
      <div className="p-5">
        <label className="block text-sm lg:text-[15px] font-semibold mb-1">
          Non-Veg <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3">
          <label className="flex items-center">
            <input onClick={handleNonVegChange} type="radio" name="veg" value="Allowed" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">Allowed</span>
          </label>
          <label className="flex items-center">
            <input onClick={handleNonVegChange} type="radio" name="veg" value="Not Allowed" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">Not Allowed</span>
          </label>
        </div>
      </div>

      <div className="p-5">
        <label className="block text-sm lg:text-[15px] font-semibold mb-1">
          Pets Allowed <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3">
          <label className="flex items-center">
            <input onClick={handlePetChange} type="radio" name="pets" value="true" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">Yes</span>
          </label>
          <label className="flex items-center">
            <input onClick={handlePetChange} type="radio" name="pets" value="false" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">No</span>
          </label>
        </div>
      </div>

      <div className="p-5">
        <label className="block text-sm lg:text-[15px] font-semibold mb-1">
          Electricity <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3">
          <label className="flex items-center">
            <input onClick={handleElectricChange} type="radio" name="electric" value="Rare/No Powercut" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">Rare/No Powercut</span>
          </label>
          <label className="flex items-center">
            <input onClick={handleElectricChange} type="radio" name="electric" value="Frequent Powercut" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">Frequent Powercut</span>
          </label>
        </div>
      </div>

      <div className="p-5">
        <label className="block text-sm lg:text-[15px] font-semibold mb-1">
          Water Supply <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3">
          <label className="flex items-center">
            <input onClick={handleWaterChange} type="radio" name="water" value="Municipal Corporation (BMC)" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">Municipal Corporation (BMC)</span>
          </label>
          <label className="flex items-center">
            <input onClick={handleWaterChange} type="radio" name="water" value="Borewell" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">Borewell</span>
          </label>
          <label className="flex items-center">
            <input onClick={handleWaterChange} type="radio" name="water" value="Both" className="form-radio" required />
            <span className="ml-2 text-sm sm:text-md">Both</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
