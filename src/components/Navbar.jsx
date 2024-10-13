import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    
    const [ visible, setVisible ] = useState(false)
    const { setShowSearch, getCartCount } = useContext(ShopContext)
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between py-5 font-medium mb-5 sm:mb-0'>
            <img src={assets.Quickbuy_logo} className='sm:w-36 w-28' onClick={() => navigate(`/`)} />
            <ul className='hidden sm:flex sm:gap-5 md:gap-12 text-sm text-slate-900 ml-[-4%]'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='sm:w-5 w-4 cursor-pointer' />

                <div className='group relative'>
                    <Link><img src={assets.profile_icon} className='sm:w-5 w-4 cursor-pointer' /></Link>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-slate-700 rounded'>
                            <Link to={'/my-profile'}><p className='cursor-pointer hover:text-black'>My Profile</p></Link>
                           <Link to={'/orders'}><p className='cursor-pointer hover:text-black'>Orders</p></Link>
                           <Link to={`/login`}><p className='cursor-pointer hover:text-black'>Logout</p></Link>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='sm:w-5 w-4 min-w-4 sm:min-w-5' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        {getCartCount()}
                    </p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' />
            </div>

            {/* Sidebar menu for small screens */}

            <div className={`${visible ? "w-full" : "w-0"} absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-1 z-50`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-3 pl-9 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 pl-9 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 pl-9 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 pl-9 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar