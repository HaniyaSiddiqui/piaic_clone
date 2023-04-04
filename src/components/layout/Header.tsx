"use client"
import React, { useState } from 'react'
import Logo from "/public/logo.svg"
import dropdown from "/public/drop-down-arrow.svg"
import Image from "next/image"
import Link from 'next/link'
import Wrapper from '@/components/shared/Wrapper'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className=" h-20  sticky z-0 inset-0 backdrop-blur-md py-3 bg-gradient-to-r from-primary to-teal-800 bg-opacity-90 ">

            <Wrapper>
                <div className="  top-0 max-w-screen-2.5xl mx-auto px-4 w-full flex justify-between css-0">

                    {/* Logo */}
                    <Link href="/" className='top-0 left-0 z-10 '>

                        <Image height={100} src={Logo} alt="Panaverse Dao" />
                    </Link>
                    {/* Navigation Bar */}
                    <ul className="hidden   md:flex h-full items-center duration-300 py-4 gap-x-4 sm:gap-x-8 text-20 text-gray-100">
                        <li className='hover:text-hover duration-300 '><Link href={"/howitworks"}>How It Works</Link></li>
                        <li className='hover:text-hover duration-300  '><a href="https://portal.piaic.org/signup" target="_blank" >Apply</a>

                        </li>
                        <li className='hover:text-hover duration-300  ' >

                            <div className="flex items-center">
                                <Link href="/about" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className="flex items-center">
                                    <span className="mr-2">About</span>
                                    <Image height={10} src={dropdown} alt="TheAbout" />
                                </Link>
                                {showMenu && (
                                    <div className="absolute right-0 px-4 mt-20 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                                        The President
                                    </div>
                                )}
                            </div>


                        </li>

                    </ul>
                    <button className="top-10 right-0 pr-10 fixed md:hidden " onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <svg
                            className="w-10 h-10 fill-current text-white"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                            />
                        </svg>
                    </button>

                    <div className="md:hidden">
                        {/* Overlay */}
                        <div
                            className={`fixed top-0 left-0 w-full h-full   z-40 ${mobileMenuOpen ? 'block' : 'hidden'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        />



                        {/* Menu */}
                        <div
                            className={`fixed top-10 mt-10 pl-10 right-0 w-full h-auto bg-gradient-to-r from-primary to-teal-800 bg-opacity-90  overflow-auto transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        >
                            <ul className="py-4 mt-10 text-gray-100 list-none px-4">
                                <li className="  hover:text-hover duration-300   py-4 border-gray-400 border-b">
                                    <Link href="/"
                                        onClick={() => setMobileMenuOpen(false)}>

                                        Home

                                    </Link>
                                </li>
                                <li className='hover:text-hover duration-300 py-4 border-gray-400 border-b'><a href="https://portal.piaic.org/signup" target="_blank" >Apply</a>

                                </li>
                                <li className='hover:text-hover duration-300  py-4 border-gray-400 border-b flex' >
                                    <div className="flex items-center">
                                        <Link href="/about" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className="flex items-center">
                                            <span className="mr-2">About</span>
                                            <Image height={10} src={dropdown} alt="TheAbout" />
                                        </Link>
                                        {showMenu && (
                                            <div className="absolute  bottom-0 px-4 mt-20 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                                                The President
                                            </div>
                                        )}
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </header >

    )
}



export default Header