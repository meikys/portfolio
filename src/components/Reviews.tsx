import React from "react";

export default function Reviews() {
    return (
        <section
            className="bg-[var(--bg-secondary)]">
            <div className="container mx-auto flex flex-col justify-start items-start gap-[32px] px-10 py-[64px]">

                <div className="flex items-center gap-[8px]">
                    <h2 className="text-[2rem] tracking-[-2%] leading-[110%] font-bold">
                        Travelers Before You
                    </h2>
                    <hr className="w-[20px]" />
                </div>
                <p className="text-[1rem] text-[#474747] tracking-[0.5%] leading-[150%]">
                    Echoes from past journeys, told by those who walked the path.
                </p>
            </div>
            <div className="px-10 py-[64px]">
                <div className="max-w-[500px]">
                    <div className="flex items-center">
                        <h4 className="text-[1.25rem] tracking-[2.5%] leading-[160%] font-bold">Mezernik Mezernicek</h4> 
                        <span className="text-[#474747]">-</span> 
                        <h5 className="text-[1rem] tracking-[2.5%] leading-[160%] font-bold text-[#474747]">Valu BET Company</h5>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quos optio porro nobis quasi aliquid recusandae omnis magnam natus earum illo, impedit explicabo voluptatibus corporis laudantium doloribus est. Expedita, id.</p>
                    <span>
                        rating
                    </span>
                </div>
            </div>
        </section>
    );
}
