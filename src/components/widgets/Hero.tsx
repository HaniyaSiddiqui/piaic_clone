import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from "next/image"
import HeroPoster from "../../assets/images/president.png"
import bgImage from "../../assets/images/world.jpg"
// Components
import Button from "@/components/shared/Button";

const Hero = () => {
    return (
        <section className="mt-10 xl:mt-10 ">
            <Wrapper >
                <div className="flex flex-col md:flex-row items-center h:screen " >
                    {/* Left Side */}
                    <div className="flex-1 bg-fixed bg-cover bg-center bg-no-repeat" >
                        <h1 className="text-6xl sm:text-6xl font-bold max-w-700">Presidential Initiative </h1>
                        <h4 className="text-primary    font-semibold text-md mt-4 ">for Artificial Intelligence & Computing (PIAIC)</h4>

                        <div className='max-w-screen-lg'>
                            <p className="mt-6 text-md text-slate-600">
                                The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.
                            </p>
                            <p className="mt-2 text-md text-slate-600">
                                Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.                            </p>
                        </div>
                        <div className='mt-5 my-5'>
                            <a href='https://portal.piaic.org/signup' target="_blank">
                                <Button text={"APPLY"} />
                            </a>

                        </div>
                    </div>

                    {/* Right Side */}
                    {/* Image here  */}


                    <div className="   shadow-gray-400 rounded-xl flex-1 flex justify-center items-center " >
                        <Image src={HeroPoster} alt="Hero Poster" className='lg:max-h-fit ' />
                    </div>



                </div>
            </Wrapper>
        </section>
    )
}


export default Hero