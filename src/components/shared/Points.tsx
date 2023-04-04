import React from 'react'

interface PointNumberProps {
    text: string;
    textColor: string;
    textSize?: string;
}


const Points = ({ text, textColor, textSize }: PointNumberProps) => {
    return (
        <div className={` xs:mt-60  md:pl-40 ${textColor} font-bold`}>

            <span className={` text-${textSize} whitespace-pre-line`}>{text}</span>
        </div>
    )
}

export default Points