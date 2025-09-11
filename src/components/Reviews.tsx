import React from "react";

import { reviews } from "@/data/reviews"

export default function Reviews() {
    return (
        <section
            className="bg-[var(--bg-secondary)]">
            <div className="container mx-auto flex flex-col justify-start items-start gap-[32px] px-10 py-[64px]">

                <div className="flex items-center gap-[8px]">
                    <h2 className="text-[2rem] tracking-[-2%] leading-[110%] font-bold">
                        Travelers Before
                    </h2>
                    <hr className="w-[20px]" />
                </div>
                <p className="text-[1rem] text-[#474747] tracking-[0.5%] leading-[150%]">
                    Echoes from past journeys, told by those who walked the path.
                </p>
                <div className="w-full flex flex-col gap-[16px]">
                    {reviews.map(({ id, personalName, brandName, review }) => (
                <div key={id} className="max-w-[300px] flex flex-col gap-[16px] border-b-1 border-red-500">
                    <div className="flex items-center gap-[8px]">
                        <h4 className="text-[1.25rem] text-[#000000] tracking-[0.5px] leading-[160%] font-bold">{personalName}</h4> 
                        <span className="font-normal">-</span>
                        <h5 className="text-[0.875rem] text-[#474747] tracking-[0.5px] leading-[160%]">{brandName}</h5>
                    </div>
                    <p>{review}</p>
                    <span>
                        rating
                    </span>
                </div>
                ))}
                </div>
            </div>
        </section>
    );
}
