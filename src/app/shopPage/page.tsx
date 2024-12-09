import React from 'react'
import Navbar from './navbar'
import DetailSection from './detailSection'
import Reviews from './customerReview'
import ReviewsProduct from './reviewsProduct'
import ReviewLinks from './links'


const ShopPage = () => {
  return (
    <div>
      <Navbar/>
      <DetailSection />
      <ReviewLinks />
      <Reviews />
      <ReviewsProduct/>
    </div>
  )
}

export default ShopPage