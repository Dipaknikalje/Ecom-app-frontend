import React from 'react'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../Utility/Redux/store'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import NavBar from '../Header/Nav/NavBar';
import Footer2 from '../Footer/Footer2';
const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
      <main>
        <ToastContainer/>
        <div className="navbar-main">
        <NavBar/>
        </div>
        <Outlet/>
      </main>
      <Footer2/>
      </Provider>
    </>
  )
}

export default RootLayout
