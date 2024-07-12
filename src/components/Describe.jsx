/* eslint-disable no-unused-vars */
import React from 'react'
import { descState } from '../atom'
import { useRecoilValue } from 'recoil'

const Describe = () => {
    const desc = useRecoilValue(descState)

    return (
        <div className="p-4 shadow rounded">
            <h2 className='text-xl md:text-2xl p-4 font-bold mb-4'>Description</h2>
            <p> {desc} </p>
        </div>
    )
}

export default Describe