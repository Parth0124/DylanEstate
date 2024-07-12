import { useSetRecoilState } from 'recoil'
import { furnishingState, safeState } from '../atom'


const Feature2 = () => {
    const furnish = useSetRecoilState(furnishingState)
    const safe = useSetRecoilState(safeState)
    
    return (
        <div>
            <div className="p-5 my-3">
                <label className="block text-sm lg:text-[15px] font-semibold mb-1">
                    Furnishing <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3">
                    <label className="flex items-center">
                        <input onClick={(e) => furnish(e.target.value)} type="radio" value="Fully Furnished" name='furnishing' className="form-radio" required />
                        <span className="ml-2 text-sm sm:text-md">Fully Furnished</span>
                    </label>
                    <label className="flex items-center">
                        <input onClick={(e) => furnish(e.target.value)} type="radio" value="Semi Furnished" name='furnishing' className="form-radio" required />
                        <span className="ml-2 text-sm sm:text-md">Semi Furnished</span>
                    </label>
                    <label className="flex items-center">
                        <input onClick={(e) => furnish(e.target.value)} type="radio" value="Unfurnished" name='furnishing' className="form-radio" required />
                        <span className="ml-2 text-sm sm:text-md">Unfurnished</span>
                    </label>
                </div>
            </div>

            <hr />

            <div className="p-5 my-3">
                <label className="block text-sm lg:text-[15px] font-semibold mb-1">
                    Additional Features
                </label>
                <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-3">
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Air conditioning</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Ceiling Fans</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Refrigerator</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Washing machine</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Microwave</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Oven</span>
                    </label>
                </div>
            </div>

            <hr />

            <div className="p-5 my-3">
                <label className="block text-sm lg:text-[15px] font-semibold mb-1">
                    Tiles
                </label>
                <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3">
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Normal White Tiles</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Marble</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Vitrified Tiles</span>
                    </label>
                </div>
            </div>

            <hr />

            <div className="p-5 my-3">
                <label className="block text-sm lg:text-[15px] font-semibold mb-1">
                    Safety <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3">
                    <label className="flex items-center">
                        <input onClick={(e) => safe(e.target.value)} type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">24/7 Security personnel (Gated Security)</span>
                    </label>
                    <label className="flex items-center">
                        <input onClick={(e) => safe(e.target.value)} type="checkbox" className="" />
                        <span className="ml-2 text-sm sm:text-md">Security Systems- CCTV</span>
                    </label>
                </div>
            </div>
        </div>
        
    )
}

export default Feature2