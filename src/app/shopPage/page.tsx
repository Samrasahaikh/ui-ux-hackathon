import React from 'react'
import DetailSection from './detailSection'
import ReviewsProduct from './reviewsProduct'
import ReviewLinks from './reviewLinks/links'
import BreadcrumbProduct from '@/components/product-page/BreadcrumbProduct'


const ShopPage = () => {
  return (
    <div>
    
      <BreadcrumbProduct />
      <DetailSection />
      <ReviewLinks />
      <ReviewsProduct/>
    </div>
  )
}

export default ShopPage