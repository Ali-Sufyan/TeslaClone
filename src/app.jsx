import React from 'react'
import Navbar from "./component/Navbar"
import ModelS from "./component/ModelS"
import ModelSImg from "./assest/images/ModelS.jfif"
import Model3Img from "./assest/images/Model3.jfif"
import ModelXImg from "./assest/images/ModelX.jfif"
import ModelYImg from "./assest/images/ModelY.jfif"
import ModelSPImg from "./assest/images/SolarPanels.jfif"
import ModelSRImg from "./assest/images/SolarRoof.jfif"

export default function app() {
  return (
    <>
    <Navbar/>
    <ModelS data={{src:ModelSImg,id:1}}/>
    <ModelS data={{src:Model3Img,id:"0"}}/>
    <ModelS data={{src:ModelXImg,id:"0"}}/>
    <ModelS data={{src:ModelYImg ,id:"0"}}/>
    <ModelS data={{src:ModelSPImg,id:"0"}}/>
    <ModelS data={{src:ModelSRImg,id:"0"}}/>

    </>
  )
}
