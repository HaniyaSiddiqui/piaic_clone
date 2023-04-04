import React from 'react'
import Wrapper from '@/components/shared/Wrapper';
import outcomeImg from '@/assets/images/pakMap.png';
import Image from 'next/image';
import Link from 'next/link'

const outcomePoints = ['Karachi', 'Islamabad', 'Lahore', 'Peshawar']

const Outcome = () => {
    return (
        <section className='mt-16 md:mt-28 relative mb-20'>
            <Wrapper>
                <div className='flex gap-x-8 items-center flex-col-reverse md:flex-row'>

                    {/* Left -IMage */}
                    <div className="flex-1">
                        <div className="absolute left-0 w-[315px] h-[315px] bg-secondary rounded-full shadow-xl blur-[250px]"></div>

                        <Image src={outcomeImg} alt="outcome" />
                    </div>
                    {/* Right - Content */}
                    <div className='flex-1 '>

                        <h2 className='font-bold text-4xl'>How It Works</h2>
                        <p className='mt-4 text-md text-slate-600'>PIAIC will launch classes in the following locations, one city at a time, in the following order</p>

                        <Link href="/howitworks">
                            <button className='text-primary text-xl mt-4 font-bold underline flex gap-x-2 items-end' >

                                Learn More<svg className='mb-1.5' width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" stroke-width="2" />
                                </svg>
                            </button>
                        </Link>

                        <div className='mt-6 grid grid-cols-2 gap-x-2 gap-y-4'>
                            {
                                outcomePoints.map((item, i) => (
                                    <div key={i} className="flex items-center gap-x-2">
                                        <h2 className='text-slate-200 text-md bg-secondary rounded-full p-3 '> {++i}</h2>

                                        <h3 className='font-medium text-lg'>{item}</h3>
                                    </div>
                                ))
                            }
                        </div>



                    </div>
                </div>
            </Wrapper>
        </section >
    )
}

export default Outcome