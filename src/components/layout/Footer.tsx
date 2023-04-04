import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import Logo from "/public/logo.svg"
import panacloud from "/public/panacloudLogo.svg"

import saylaniLogo from "/public/saylaniLogo.png"
import facebookIcon from "/public/facebookIcon.svg"
import youtubeicon from "/public/youtubeicon.svg"

const Footer = () => {
    return (
        <footer className="bg-gray-700   bottom-0 w-full">
            <Wrapper>


                <div className="container mx-auto py-8 flex flex-wrap justify-between">

                    <div className="w-full md:w-auto flex-shrink-0 mb-4 md:mb-0">

                        <h2 className="text-gray-300 font-semibold lg:px-4 lg:py-4">Strategic Partner</h2>

                        <div className="flex flex-wrap">
                            <Image src={panacloud} alt="Partner Logo 1" className="w-auto h-16" />
                            <Image src={saylaniLogo} alt="Partner Logo 2" className="w-auto h-16" />
                        </div>
                    </div>


                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <h3 className="text-slate-200 font-medium mb-2">Locations</h3>
                        <h4 className="text-slate-200 mb-2">PIAIC Helpline</h4>
                        <p className="text-slate-200 mb-2">+92-308-2220203 (WhatsApp as well)</p>
                        <div className=" flex mt-5 original-connect gap-4">
                            <p className="text-slate-200 mb-2">Connect with us</p>
                            <a target="_blank" href="https://www.facebook.com/groups/piaic/">
                                <Image className="footer-list-contactus-icons" src={facebookIcon} alt="facebook" />
                            </a>


                            <a target="_blank" href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg">

                                <Image className="footer-list-contactus-icons" alt="youtube" src={youtubeicon} /> </a>


                        </div>
                    </div>


                    <div className="w-full md:w-auto">
                        <Image src={Logo} alt="Powered By Logo" className="w-20 h-20" />
                    </div>
                </div>
            </Wrapper>
        </footer >
    )
}


export default Footer