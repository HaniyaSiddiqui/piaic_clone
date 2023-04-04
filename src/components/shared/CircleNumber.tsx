import React from 'react'

interface CircleNumberProps {
    number: number;
    circleColor?: string;
    circleBg?: string;
}


const CircleNumber = ({ number, circleColor, circleBg }: CircleNumberProps) => {
    return (
        <div className={` ${circleBg ? circleBg : ''} flex items-center justify-center w-20 h-20 rounded-full border-3 border-primary ${circleColor ? circleColor : ''} font-bold text-4xl  top-0 left-0`}>
            {number}
        </div>
    )
}

export default CircleNumber