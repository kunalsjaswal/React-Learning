import React from 'react'
import Electronics from './homeSections/Electronics'
import FemaleCloth from './homeSections/FemaleCloth'
import Jewelery from './homeSections/Jewelery'
import MensCloth from './homeSections/MensCloth'
import Welcome from './homeSections/Welcome'

const Home = () => {
  return (
    <div>
        <Welcome/>
        <MensCloth/>
        <Electronics/>
        <FemaleCloth/>
        <Jewelery/>
    </div>
  )
}

export default Home