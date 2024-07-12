/* eslint-disable no-unused-vars */
import { useRecoilState } from "recoil"
import { depositState, maintenanceState, maintenanceTimeState, rentState } from "../atom"
import { useEffect, useState } from "react"

const PriceDetails = ({setFlag}) => {
    const [rent, setRent] = useRecoilState(rentState)
    const [deposit, setDeposit] = useRecoilState(depositState)
    const [maintenance, setMaintenance] = useRecoilState(maintenanceState)
    const [time, setTime] = useRecoilState(maintenanceTimeState)

    const [maintenanceOption, setMaintenanceOption] = useState('');

    useEffect(() => {
        if (rent && deposit) {
            console.log(rent)
            console.log(deposit)
            console.log(maintenance)
            console.log(time)
            if ((maintenanceOption === 'Extra Maintenance' && maintenance && time) || maintenanceOption !== 'Extra Maintenance') {
                // console.log("yaha")
                setFlag(1)
            }
        }
    }, [rent, deposit, maintenance, time])

    return (
        <div className='p-4'>
            <form className="text-sm lg:text-[16px] space-y-4 bg-white text-black">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
                    <div className="p-2 w-full">
                        <label className="block font-medium mb-1">
                            Rent <span className="text-red-500">*</span>
                        </label>
                        <div className="flex">
                            <label className="flex items-center w-full">
                                <input type="number" placeholder="₹ / Month" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                                    onChange={(e) => setRent(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="p-2 w-full">
                        <label className="block font-medium mb-1">
                            Security <span className="text-red-500">*</span>
                        </label>
                        <div className="flex">
                            <label className="flex items-center w-full">
                                <input type="number" placeholder="₹ / Month" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                                    onChange={(e) => setDeposit(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
                    <div className="p-2 w-full">
                        <label className="block font-medium mb-1">
                            Maintenance <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="maintenanceOption"
                            className="border border-1px-gray p-2 sm:p-3 w-full"
                            required
                            value={maintenanceOption}
                            onChange={(e) => setMaintenanceOption(e.target.value)}
                        >
                            <option value="">Maintenance</option>
                            <option value="Included in Rent">Included in Rent</option>
                            <option value="Extra Maintenance">Extra Maintenance</option>
                        </select>
                    </div>

                    {maintenanceOption === 'Extra Maintenance' && (
                        <div className="p-2 w-full">
                            <label className="block font-medium mb-1">
                                Maintenance Amount <span className="text-red-500">*</span>
                            </label>
                            <div className="flex flex-col lg:flex-row gap-2">
                                <input
                                    type="number"
                                    placeholder="₹ Maintenance"
                                    className="border border-1px-gray p-1 sm:p-3"
                                    required
                                    onChange={(e) => setMaintenance(e.target.value)}
                                />
                                <select
                                    name="maintenanceFrequency"
                                    className="border border-1px-gray p-2 sm:p-3 w-full"
                                    required
                                    onChange={(e) => setTime(e.target.value)}
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="Yearly">Yearly</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col p-5">
                    <h2 className='font-semibold text-lg sm:text-xl py-2'>Additional pricing details to convey to agent ?</h2>
                    <input className="border border-2 p-3" type="text" placeholder="Do you have any conerns regarding pricing of your property ? Add your conerns here or call us" />
                </div>
            </form>
        </div>
    )
}

export default PriceDetails