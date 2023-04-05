"use client";
import React, { useState } from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button';
import QuarterBox from '@/components/shared/QuarterBox';
import VideoData from '@/components/shared/VideosData';
import Image from 'next/image';
import YouTube from 'react-youtube';



const Videos = () => {

    const [selectedItem, setSelectedItem] = useState("freequarter")
    const selectedItemData = VideoData.find((item) => item.slug === selectedItem)
    const header = 'Videos';

    return (
        <section className='mt-16 ' id="courses">
            <Wrapper>

                <div className="px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold sm:text-4xl whitespace-pre-line">
                        {header}
                    </h2>

                    <div className="mt-10 flex flex-col sm:flex-row gap-x-4 gap-y-4">
                        <div className=" shadow-xl w-full sm:w-8/12 rounded-xl border border-slate-200 py-8 px-8 bg-gradient-to-b from-hover to-primary bg-opacity-90">
                            <h4 className="text-xl sm:text-2xl font-semibold">{selectedItemData?.header}</h4>
                            <p className="text-md text-slate-200 mt-2 max-w-screen-md">{selectedItemData?.description}</p>
                            <div className="  mt-8 flex ">
                                <YouTube videoId={selectedItemData?.videoId} className="h-auto sm:w-2  md:w-4/5  " />
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-0 px-4 space-y-4 py-6 w-full sm:w-4/12 flex flex-col">
                            {VideoData.map((item, i) => (
                                <div onClick={() => setSelectedItem(item.slug)} key={i} className="flex gap-x-4 items-center cursor-pointer">
                                    <div className="w-30 flex-1 lg:h-20 w-36 relative ">
                                        {selectedItemData?.slug == item.slug ? <span className="absolute inset-0 object-cover bg-teal-400 -z-10"></span> : ''}
                                        <Image src={item.image} alt={item.slug} className="video-thumbnail object-cover rounded-lg hover:scale-105" />
                                    </div>
                                    <div className="flex-1 flex-col flex-grow">
                                        <h4 className="text-primary text-xs md:font-semibold">{item.header}</h4>
                                        <h3 className="hidden sm:block text-sm font-semibold truncate truncate-lines-2 w-64">{item.description}</h3>
                                    </div>
                                    <hr className="sm:hidden" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Videos