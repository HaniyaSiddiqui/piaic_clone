import React from 'react'
import Wrapper from '@/components/shared/Wrapper'

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from 'next/image';
import presidentImg from '@/assets/images/president.png';
import fbLogo from '@/assets/images/fbLogo.png';
import twitterLogo from '@/assets/images/twitterLogo.png';


const page = () => {



    return (
        <div className=' bg-slate-200 '>
            {/* Navbar */}
            <Header />
            {/* How it works content */}
            <div className=' mt-30  '>
                {/* Navbar */}
                <Wrapper>
                    <div className=" mt-20 " >
                        <div className="h-40 w-40  text-center rounded-full border-4 border-green-500 overflow-hidden item-center ml-[25%] sm:ml-[35%] md:ml-[40%] lg:ml-[45%] ">

                            <div className="flex justify-center bg-white shadow-gray-400 rounded-xl " >
                                <Image src={presidentImg} alt="Hero Poster" className='text-center' />
                            </div>
                        </div>


                        <div className="text-center ">
                            <h2 className="text-3xl text-gray-700  font-bold mt-10 ">Dr. Arif Alvi</h2>
                            <p>President of the Islamic Republic of Pakistan</p>

                            <div className="flex justify-center my-10 " >

                                <div className='px-2'>
                                    <Image className='w-8 ' src={fbLogo} alt="fbLogo" />
                                </div>
                                <div>
                                    <Image className='w-8' src={twitterLogo} alt="twitterLogo" />
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="absolute left-0 w-[415px] h-[415px] bg-secondary rounded-full shadow-xl blur-[250px]"></div>

                    <div className=' relative md:px-10 text-gray-800 '>
                        <div className="text-sm md:text-lg  my-4">Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
                        </div>

                        <div className="text-sm md:text-lg my-4">Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De&apos; Montmorency College of Dentistry, Lahore where he was declared the &quot;Best Graduate&quot;. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship &quot;Diplomatic American Board of Orthodontists (1995)&quot;. </div>
                        <div className="text-sm md:text-lg my-4">President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</div>

                        <div className="text-sm md:text-lg my-4">Dr. Arif Alvi&apos;s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a member of the PTI&apos;s Central Executive Committee since its inception and has held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.
                        </div>


                        <div className="text-sm md:text-lg my-4 mb-10">
                            During his tenure as the Secretary General of the party, Dr. Arif Alvi introduced social media platform in the politics of Pakistan. He was instrumental in holding intra-party election (2012-2013) and enabled millions of party members to digitally participate in the election process. He was elected as member of National Assembly from Karachi in 2013 and 2018 and was instrumental in drafting and the passage of many bills including one on Alternate Dispute Resolution. He also chaired the sub-committee of EVM&apos;s, Digital Identification of voters and voting of overseas Pakistanis. The latter has finally come to fruition. Dr. Arif Alvi has keen interest in education and health sectors. Provision of basic facilities to the common man and uplifting the country&apos;s image are very close to his heart. He considers people of Pakistan as the most precious asset and, therefore, accords special focus to human resource development in the country. He is happily married and has four children.
                        </div>

                    </div>
                </Wrapper>
            </div>
            <Footer />
        </div >
    )
}

export default page