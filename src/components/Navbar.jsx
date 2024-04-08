'use client' // this is a client component
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll/modules'
import Image from 'next/image'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

const NAV_ITEMS = [
    {
        label: 'Home',
        page: 'home',
    },
    {
        label: 'About',
        page: 'about',
    },
]

export default function Navbar() {
    const [navBar, setNavbar] = useState(false)
    return (
        <header className='w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600'>
            <div className='justify-between md:items-center md:flex'>
                <div>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        <Link to='home'>
                            <div className='container flex items-center space-x-2'>
                                <Image src='/logo-picaval.png' alt='Picaval logo' height={200} width={200} />
                            </div>
                        </Link>
                        <div className='md:hidden'>
                            <button
                                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                                onClick={() => setNavbar(!navBar)}
                            >
                                {navBar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navBar ? 'block' : 'hidden'
                            }`}
                    >
                        <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className={
                                            'block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer'
                                        }
                                        activeClass='active'
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setNavbar(!navBar)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}