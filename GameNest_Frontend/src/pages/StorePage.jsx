import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturedBanner from '../components/FeaturedBanner'
import LatestGames from '../components/LatestGames'
import FreeGames from '../components/FreeGames'
import ComingSoon from '../components/ComingSoon'

function StorePage() {
  return (
    <>
        <Header />
        <FeaturedBanner />
        <LatestGames />
        <FreeGames />
        <ComingSoon />
        <Footer />
    </>
  )
}

export default StorePage