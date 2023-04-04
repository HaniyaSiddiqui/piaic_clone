import React from 'react'
import Wrapper from '@/components/shared/Wrapper'

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CircleNumber from '@/components/shared/CircleNumber';
import Points from '@/components/shared/Points';
import Image from 'next/image';
import pakMap from '@/assets/images/pakMap.png';


const page = () => {


    const dataPoint = [
        {
            id: 2,
            bgColor: "bg-gradient-to-r from-hover to-slate-400",
            circleColor: "text-hover",
            circleBg: "bg-white",
            textSize: "lg",
            textColor: "text-slate-200",
            text: "To participate in the program and become eligible for the most prestigious credentials for AI, Cloud and Blockchain technologies in the world, students must complete the following process \n\n1- Signup at PIAIC Portal. \n2- Submit the online application.\n3- Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.\n4- Pass all PIAIC exams with an average score of at least 70%.",
        },

        {
            id: 3,
            bgColor: "bg-slate-100",
            circleColor: "text-slate-200",
            circleBg: "bg-hover",
            textSize: "sm",
            textColor: "text-secondary",
            text: "All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, Blockchain, Internet of Things, 5G and Software Defined Networking and Quantum Computing . Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year."
        },

        {
            id: 4,
            bgColor: "bg-gradient-to-r from-secondary to-emerald-400",
            circleColor: "text-hover",
            circleBg: "bg-white",
            textSize: "sm",
            textColor: "text-slate-200",
            text: "Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students.\nThe fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.\nThe fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter."
        },

        {
            id: 5,
            bgColor: "bg-slate-100",
            circleColor: "text-slate-200",
            circleBg: "bg-hover",
            textSize: "sm",
            textColor: "text-secondary",
            text: "Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds."
        },


        {
            id: 6,
            bgColor: "bg-gradient-to-r from-secondary to-emerald-400",
            circleColor: "text-hover",
            circleBg: "bg-white",
            textSize: "sm",
            textColor: "text-slate-200",
            text: "Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications."
        },


        {
            id: 7,
            bgColor: "bg-stone-800",
            circleColor: "text-slate-200",
            circleBg: "bg-hover",
            textSize: "sm",
            textColor: "text-slate-200",
            text: "For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.\nPlease note we are closed on Fridays.\nFor technical questions related to coursework, you may contact us via email at education@piaic.org."
        },
    ]

    const cities = ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'];
    return (
        <div>

            {/* Navbar */}
            <Header />


            {/* How it works content */}
            <div className=' bg-slate-200  '>
                {/* Navbar */}

                <Wrapper>

                    <h2 className="text-5xl text-secondary text-center underline pt-20 font-bold whitespace-pre-line">How It Works</h2>


                    {/* <div className='flex gap-x-8 top-0 self-start  basis-2/12   flex-col-reverse md:flex-row'> */}
                    <div className='mt-10 mb-2  bg-stone-800 shadow-xl  top-0  flex-1  lg:flex-row rounded-xl border border-slate-200 py-8 px-8'>


                        <div className="flex-1  md:flex-row basis-8/12">

                            <div className="  relative flex items-center justify-center text-lg mb-4 sm:mb-0 sm:mr-4 " >
                                <CircleNumber number={1} circleColor={"text-slate-200"} circleBg={"bg-hover"} />
                            </div>

                            <Points textColor={"text-slate-200"} textSize={"2xl"} text={"PIAIC will launch classes in the following locations, one city at a time, in the following order"} />
                            <div className="flex md:flex-row mt-20 ">
                                <div className=' flex-1 text-center justify-center md:pl-60 '>
                                    <Image src={pakMap} alt="map" className=' h-60 w-60' />
                                </div>
                                <div className="flex-1 ">
                                    <table className="w-full whitespace-no-wrap">

                                        <tbody>
                                            {
                                                cities.map((city, i) => (

                                                    <tr className="m-4">
                                                        <td className="text-hover w-8">{++i}</td>
                                                        <td className="w-8">
                                                            <div className="w-4 h-4 rounded-full border border-hover bg-hover"></div>

                                                        </td>
                                                        <td className="p-2 mb-2  text-slate-200">
                                                            {city}</td>

                                                    </tr>
                                                ))
                                            }


                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>
                    </div>


                    {
                        dataPoint.map((item, i) => (
                            <div className={` ${item.bgColor} mb-2 shadow-xl  rounded-xl border border-slate-200 py-12 px-8`}>


                                <div className="flex flex-col sm:flex-row    mb-10  ">

                                    <div className="  relative flex items-center justify-center text-lg mb-4 sm:mb-0 sm:mr-4 " >
                                        <CircleNumber number={item.id} circleColor={item.circleColor} circleBg={item.circleBg} />
                                    </div>



                                    <Points textColor={item.textColor} textSize={item.textSize} text={item.text} />

                                </div>
                            </div>

                        ))
                    }



                </Wrapper>
            </div>

            <Footer />

        </div>
    )
}

export default page