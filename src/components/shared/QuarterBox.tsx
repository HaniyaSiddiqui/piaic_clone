import React, { FC } from 'react'

interface IProps {
    header: string;
    description: string;
    number: number;
    haveBorder?: boolean;
    isSelected?: boolean;
    headBg?: string;
    textColor?: string;
}
const QuarterBox: FC<IProps> = ({ header, description, number, haveBorder = true, isSelected = false, headBg = false, textColor }) => {
    return (


        <div className="   relative bg-white   w-full border rounded-lg items-center h-60 md:h-40">
            <div className={`${headBg ? headBg : ""}  h-30 px-4 py-2 rounded-t-lg`}>
                <h2 className=" text-md text-center md:text-xl font-bold text-slate-100"> <p>{header}</p></h2>
            </div>
            <div className={`text-hover items-center text-xs md:text-sm font-bold bg-white px-4 py-2 rounded-b-lg whitespace-pre-line`}>
                <p>
                    {description}
                </p>
            </div>

        </div >




    )
}

export default QuarterBox