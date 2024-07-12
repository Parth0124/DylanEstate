/* eslint-disable no-unused-vars */
import React from 'react'
import PreviewDetail from './PreviewDetail'
import PreviewInquiry from './PreviewInquiry'
import PropertyOverview from './PropertyOverview'
import Amenities from './Amenities'
import Describe from './Describe'
import ReviewsRating from './ReviewsRating'
import SimilarProps from './SimilarProps'
import About from './About'
import Footer from './Footer'

const PreviewPage = () => {
  return (
    <div className='bg-white text-[#122B49] h-screen overflow-y-scroll p-1 md:p-4'>
      <div className='flex w-full flex-col md:flex-row mb-5'>
        <div className='w-full md:w-2/3 p-2 space-y-5 md:space-y-10'>
          <PreviewDetail />
          <PropertyOverview />
          <Amenities />
          <Describe />
        </div>

        <div className='w-full md:w-1/3 p-2 mt-4 md:mt-0'>
          <PreviewInquiry />
        </div>
      </div>

      <div className='w-full p-2 space-y-5 md:space-y-10 mb-10'>
        <ReviewsRating />
        <SimilarProps />
        <About />
      </div>

      <Footer />
    </div>
  )
}

export default PreviewPage
