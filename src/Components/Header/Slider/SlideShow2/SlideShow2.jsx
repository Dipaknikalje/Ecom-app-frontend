import React, { useEffect, useState } from 'react'
import pic1 from '../images/corousel_3.png'
import pic2 from '../images/corousel_1.png'
import pic3 from '../images/corousel_2.png'
const SlideShow2 = () => {
    const [selectImage, setSelectImage] = useState(0);
    const [allImage ] = useState([pic1, pic2, pic3]);
  
    useEffect(() =>{
      setInterval(() => {
        setSelectImage(selectImage => selectImage < 3 ? selectImage + 1 : 0)
      }, 5000);
    }, [])
    return (
      <div>
        <img className='imageSlider' src={allImage[selectImage]} alt="images not found"/>
      </div>
    )
}

export default SlideShow2
