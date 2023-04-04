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
                <div >
                    <h2 className="text-4xl font-bold whitespace-pre-line">
                        {header}
                    </h2>


                    {/* Content Left */}
                    <div className='mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-4'>
                        <div className='shadow-xl basis-8/12 rounded-xl border border-slate-200 py-8 px-8 bg-gradient-to-b from-hover to-primary bg-opacity-90'>
                            <h4 className='text-2xl font-semibold mx-w-screen-sm'>{selectedItemData?.header}</h4>
                            <p className='text-md text-slate-200 mt-2 max-w-screen-md'>{selectedItemData?.description}
                            </p>


                            <div className="flex-1 h-auto w-auto">
                                <div className="flex flex-col md:flex-row gap-4 mt-8  ">
                                    <YouTube videoId={selectedItemData?.videoId} className=" h-auto w-auto " />
                                </div>

                            </div>


                        </div>

                        {/* Content Right */}
                        <div className='px-4  space-y-4 py-6 basis-4/12  flex-1'>
                            {
                                VideoData.map((item, i) => (
                                    <div onClick={() => setSelectedItem(item.slug)} key={i} className='flex gap-x-4 items-center cursor-pointer '>
                                        <div className='flex-shrink-0 h-20 w-36 relative'>
                                            {selectedItemData?.slug == item.slug ?
                                                <span className=" h-23 w-full absolute inset-0 object-cover bg-teal-400 -z-10"></span>
                                                : ''}
                                            <Image src={item.image} alt={item.slug} className={"h-20 object-cover rounded-lg hover:scale-105"} />
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-semibold">{item.header}</h4>
                                            <h3 className='text-sm font-semibold truncate truncate-lines-2 w-64'>{item.description}</h3>
                                        </div>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Videos