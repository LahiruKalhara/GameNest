import React from 'react'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import FeaturedGames from '../components/FeaturedGames'
import ExploreCategories from '../components/ExploreCategories'

function HomePage() {
  return (
    <>
        <Header />
        <HomeHero />
        <FeaturedGames />
        <ExploreCategories />
    </>
  )
}

export default HomePage