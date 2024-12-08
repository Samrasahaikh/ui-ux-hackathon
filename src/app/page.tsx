
import BrandLogo from '@/components/brandLogo'
import Hero from '@/components/hero'
import LatestOffer from '@/components/latestOffer'
import NewArrivals from '@/components/newArrivals'
import Reviews from '@/components/reviews'
import Style from '@/components/style'
import TopSelling from '@/components/topSelling'
import React from 'react'

const HomePage = () => {
  return (
    <div>
    <Hero />
    <BrandLogo/>
    <NewArrivals />
    <TopSelling />
    <Style />
    <Reviews />
    <LatestOffer/>
    </div>
  )
}

export default HomePage