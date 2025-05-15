import React from 'react'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import FeaturedGames from '../components/FeaturedGames'
import ExploreCategories from '../components/ExploreCategories'
import UserReviews from '../components/UserReviews'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
        <Header />
        <HomeHero />
        <FeaturedGames />
        <ExploreCategories />
        <UserReviews />
        <Footer />
    </>
  )
}

export default HomePage