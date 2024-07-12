import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { imgState } from '../atom';

const PropertyImages = ({ setFlag }) => {
    const [selectedImages, setSelectedImages] = useState([]);
    const setImg = useSetRecoilState(imgState);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            setFlag(1);
            const fileReaders = [];
            const images = [];

            files.forEach((file, index) => {
                const reader = new FileReader();
                reader.onload = () => {
                    images.push(reader.result);
                    if (images.length === files.length) {
                        setSelectedImages((prevImages) => [...prevImages, ...images]);
                        setImg((prevImg) => [...prevImg, ...images]);
                    }
                };
                reader.readAsDataURL(file);
                fileReaders.push(reader);
            });
        }
    };

    return (
        <div className="text-sm sm:text-md text-gray-800 flex flex-col items-center sm:items-start p-5 sm:p-10 space-y-4">
            <div className="text-center sm:text-left pb-2">
                Add Photos / Videos to attract more tenants!
            </div>

            <div className="text-center sm:text-left py-3">
                Add Photos of living room, bedroom, bathroom, floor, kitchen, doors, balcony, location map, neighbourhood, etc.
            </div>

            <div className={`flex flex-col items-center sm:items-start w-full border border-1 ${selectedImages.length > 0 ? 'h-auto' : 'h-64'} justify-center`}>
                <label className="bg-[#122B49] text-white py-2 px-4 rounded cursor-pointer m-auto">
                    + Add photo now
                    <input type="file" className="hidden" multiple onChange={handleFileChange} />
                </label>
                {selectedImages.length > 0 && (
                    <div className="mt-4 w-full p-4 flex flex-wrap gap-4">
                        {selectedImages.map((image, index) => (
                            <img key={index} src={image} alt={`Selected ${index}`} className="w-32 h-32 object-cover" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyImages;
