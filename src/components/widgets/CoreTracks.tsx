import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'
import QuarterBox from '../shared/QuarterBox';

const CoreTrackData = [
    {
        header: "Artificial Intelligence",
        description: "A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS\n GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI",
        number: 1,

        HbgColor: 'bg-sky-900',
        textColor: 'text-sky-900'
    },
    {
        header: "Cloud Native and Mobile Web ",
        description: "A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS\nGETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.",
        number: 2,
        HbgColor: 'bg-pink-600',
        textColor: 'text-pink-600'
    },
    {
        header: "Blockchain Specialist ",
        description: "A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS",
        number: 3,
        HbgColor: 'bg-yellow-300',
        textColor: 'text-yellow-300'
    },
    {
        header: "Internet of Things and AI ",
        description: "A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI",
        number: 3,
        HbgColor: 'bg-primary',
        textColor: 'text-primary'
    },

];


const CoreTracks = () => {
    const header = 'Available Programs';
    return (
        <section className='mt-10  relative'>
            <Wrapper>




                <div className='max-w-screen-sm'>
                    <div className="absolute left-0 w-[315px] h-[315px] bg-secondary rounded-full shadow-xl blur-[250px]"></div>


                    <h2 className="text-6xl font-bold whitespace-pre-line">
                        {header}
                    </h2>

                </div>

                {/* Boxes */}

                <div className="my-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 justify-center items-center">
                    {
                        CoreTrackData.map((item, i) => (
                            <QuarterBox
                                key={item.number}
                                header={item.header}
                                description={item.description}
                                number={i + 1}
                                headBg={item.HbgColor}
                                textColor={item.textColor}
                            />
                        )
                        )
                    }
                </div>

            </Wrapper>
        </section>
    )
}

export default CoreTracks