import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

const Overlay = ({ setOverlay }) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true)

    return (
        <Dialog open={open} onClose={() => {
            navigate("/dylanEstate/thankyou")
            setOpen(false)
            setOverlay(0)
        }} className="relative z-10">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <Dialog.Panel
                        className="relative transform overflow-hidden py-10 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                    >
                        <div className="bg-white sm:p-6 flex flex-col items-center justify-center p-6">
                            <p className="text-sm text-[#122B49] font-semibold">
                                POST PROPERTY ON DYLAN ESTATE?
                            </p>
                        </div>

                        <div className="px-4 py-3 sm:px-6">
                            <button
                                type="button"
                                onClick={() => {
                                    setOpen(false)
                                    setOverlay(0)
                                    navigate("/dylanEstate/thankyou")
                                }}
                                className="w-full justify-center rounded-md bg-[#122B49] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1A3874]"
                            >
                                Continue
                            </button>
                            <p className='text-gray-800 text-sm pt-2'>By continuing you agree to our <span className='underline font-semibold'> Terms and Conditons & Privacy Policy</span> </p>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

export default Overlay
