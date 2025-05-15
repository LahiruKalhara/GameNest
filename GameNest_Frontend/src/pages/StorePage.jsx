import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturedBanner from '../components/FeaturedBanner'
import LatestGames from '../components/LatestGames'

function StorePage() {
  return (
    <>
        <Header />
        <FeaturedBanner />
        <LatestGames />
        <Footer />
    </>
  )
}

export default StorePage