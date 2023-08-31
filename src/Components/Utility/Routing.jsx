import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Accessories from '../Pages/Accessories'
import Mobiles from '../Pages/Mobiles'
import Ipad from '../Pages/Ipad'
import Laptops from '../Pages/Laptops'
import Macbook from '../Pages/Macbook'
import LoginPage from '../Auth/Login/LoginPage'
import RegisterPage from '../Auth/Register/RegisterPage'
import Article from '../Pages/Article/Article'
import Cart from '../Cart/Cart'
import RootLayout from '../Pages/RootLayout'
import AppleAccessories from '../subPages/AppleAccessories'
import BoatFile from '../subPages/BoatFile'
import ScanDiskFile from '../subPages/ScanDiskFIle'
import HppdFile from '../subPages/HppdFile'
import OneplusFile from '../subPages/Mobilesubpages/OneplusFile'
import SamsungFile from '../subPages/Mobilesubpages/SamsungFile'
import RedmiFile from '../subPages/Mobilesubpages/RedmiFile'
import AsusFile from '../subPages/Mobilesubpages/AsusFile'
import PixelFile from '../subPages/Mobilesubpages/PixelFile'
import IpadAirFile from '../subPages/IpadPages/IpadAirFile'
import IpadProFile from '../subPages/IpadPages/IpadProFile'
import AsusLapFile from '../subPages/LaptopPages/AsusLapFile'
import DellFile from '../subPages/LaptopPages/DellFile'
import HpLapFile from '../subPages/LaptopPages/HpLapFile'
import LenoveLapFile from '../subPages/LaptopPages/LenoveLapFile'
import MacbookAirFile from '../subPages/MacbookPages/MacbookAirFile'
import MacbookAppleFile from '../subPages/MacbookPages/MacbookAppleFile'
import Myorders from '../Order/Myorders'
import Private from './Privat'
import SearchPage from '../Searchbar/SearchPage'
import FeaturedProducts from '../Pages/Article/FeaturesProduct'
import Myaccount from '../Auth/Profile/Myaccount'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/mobiles" element={<Mobiles/>}/>
        <Route path='/ipad' element={<Ipad/>}/>
        <Route path='/laptops' element={<Laptops/>}/>
        <Route path='/macbook' element={<Macbook/>}/>
        {/* <Route path='/cart' element={<Cart/>}/> */}

        <Route path="cart" element={<Private Component={Cart} />} />

        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path="article/:Id" element={<Article/>} />
        <Route path="/appleaccessories" element={<AppleAccessories/>}/>
        <Route path='/boat' element={<BoatFile/>}/>
        <Route path='/scandisk' element={<ScanDiskFile/>}/>
        <Route path='/hp' element={<HppdFile/>}/>
        <Route path='/oneplus' element={<OneplusFile/>}/>
        <Route path='/samsung' element={<SamsungFile/>}/>
        <Route path='/redmi' element={<RedmiFile/>}/>
        <Route path='/asus' element={<AsusFile/>}/>
        <Route path='/pixel' element={<PixelFile/>}/>
        <Route path='/ipadair' element={<IpadAirFile/>}/>
        <Route path='/ipadpro' element={<IpadProFile/>}/>
        <Route path='/asuslaptop' element={<AsusLapFile/>}/>
        <Route path='/delllaptop' element={<DellFile/>}/>
        <Route path='/hplaptop' element={<HpLapFile/>}/>
        <Route path='/lenovelaptop' element={<LenoveLapFile/>}/>
        <Route path='/macbookair' element={<MacbookAirFile/>}/>
        <Route path='/macbookapple' element={<MacbookAppleFile/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
        <Route path='/account' element={<Myaccount/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/featuredproducts' element={<FeaturedProducts/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default Routing
