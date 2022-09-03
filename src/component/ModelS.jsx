import React from 'react'
import Cardetail from "./CarDetail"
import Buttongroup from './buttongroup'
import DownSvg from "./downbounce"
export default function ModelS(props) {
  return (
    <>
    <div className="relative">
    <div className="car_section">
<img src={props.data.src} alt="Model S " className='car_img' />

    </div>
    <Cardetail />
    <Buttongroup/>
    { props.data.id == 1 &&(<DownSvg/>) }
    </div>
    </>
  )
}
