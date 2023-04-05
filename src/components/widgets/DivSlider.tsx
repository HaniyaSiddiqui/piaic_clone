"use client";
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import Wrapper from '@/components/shared/Wrapper';
import presidentlaunching from '@/assets/images/presidentlaunching.jpg';
import meeting from '@/assets/images/meeting.jpg';
import chiefmeeting from '@/assets/images/chiefmeeting.jpg';
import Image from 'next/image';


const items = [
    {
        title: 'President launching the PIAIC website.',
        description: 'President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).',
        image: presidentlaunching,
    },
    {
        title: 'First meeting with the President.',
        description: 'First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).',
        image: meeting,
    },
    {
        title: 'Meeting with Chief Secretary Sindh.',
        description: 'Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh.',
        image: chiefmeeting,
    },
];

const outcomePoints = ['Product Ownership', 'Freelancing', 'Global Marketing by DAO', 'Boosting Economy.']


const DivCarousel = () => {
    return (


        <section className='mt-16 md:mt-28   relative bg-gradient-to-b from-hover to-primary bg-opacity-90'>
            <Wrapper>
                <div className='mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-4 py-20'>
                    <div className='mt-6 gap-x-2 gap-y-4'>
                        <Carousel
                            showArrows={true}
                            showThumbs={false}
                            showIndicators={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={3000}
                            transitionTime={500}
                            stopOnHover={false}
                        >
                            {items.map((item, i) => (
                                <div key={i} className='flex gap-x-8 items-center flex-col-reverse md:flex-row'>
                                    <div className="flex-1 py-20 md:py-0">
                                        <Image src={item.image} alt={item.title} className='rounded-lg' />
                                    </div>
                                    <div className='flex-1'>
                                        <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl'>{item.title}</h2>
                                        <p className='mt-4 text-md md:text-lg text-slate-200'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                        <div className="absolute right-0 md:w-[315px] md:h-[315px] lg:w-[350px] lg:h-[350px] bg-secondary rounded-full shadow-xl blur-[250px]">
                        </div>
                    </div>
                </div>

            </Wrapper >
        </section >


    );
};

export default DivCarousel;
