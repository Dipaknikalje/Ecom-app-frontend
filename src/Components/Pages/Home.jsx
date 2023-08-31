import React from 'react'
import SlideShow from '../Header/Slider/SlideShow'
import Footer from '../Footer/Footer'
// import BestSeller from './BestSeller'
import './home.css'
import FeaturedProducts from './Article/FeaturesProduct'
import Sheeping from './Sheeping/Sheeping'
// import SlideShow2 from '../Header/Slider/SlideShow2/SlideShow2'

const Home = () => {
  return (
    <div>
      <SlideShow/>
      <h1 className='best-head'>Best Seller</h1>
      {/* <BestSeller/> */}
      <br/>
      <FeaturedProducts/>
      <div className='best-head-sheeping'><Sheeping/></div>
      
        <Footer/>
        </div>
        
  )
}

export default Home
