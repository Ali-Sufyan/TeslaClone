import React from 'react'
import Logo from "../assest/images/tesla.svg"
export default function Navbar() {
  return (
   <>
   <nav className='flex justify-between align-center w-full h-[5.5rem] p-[3.2rem]  t-0 z-10 fixed'>
   {/* -------Logo--------- */}
   <div>
    <img src={Logo} alt="Tasla Logo" className='h-6 min-w-[200px]' />
   </div>
   {/* -------Nav Link--------- */}

   <div className='invisible lg:visible'>
    <ul className='lg:flex'>
        <li className='Nav_link'>Model S</li>
        <li className='Nav_link'>Model X</li>
        <li className='Nav_link'>Model 3</li>
        <li className='Nav_link'>Model Y</li>
        <li className='Nav_link'>Solar Roof</li>
        <li className='Nav_link'>Solar Panels</li>

    </ul>

   </div>

   {/* -------Externel Link--------- */}
<div>
<ul className='invisible sm:visible flex'>
    <li className='Nav_link'>Shop</li>
    <li className='Nav_link'>Account</li>
    <li className='Nav_link'>Menu</li>

</ul>

</div>
</nav>
   </>
  )
}
