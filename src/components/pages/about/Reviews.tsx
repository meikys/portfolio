import React from "react";
import Button from "@/components/ui/Button";
import { CiCalendar, CiUser } from "react-icons/ci";
import { reviews } from "@/data/reviews";
import Stars from "@/components/ui/Rating";

export default function Reviews() {
  return (
    <>
      <section className="bg-[var(--bg-primary)]">
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
          <Button variant="primary">
            Let us set forth together on a journey where every line of code
            tells its own tale.
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-[32px] lg:gap-0 bg-[var(--bg-secondary)] px-10 lg:px-0">
        {reviews.map(
          ({ id, personalName, projectDescription, techHead, tech, user, date, review, feedHead, rating }) => (
            <div
              key={id}
              className="text-center lg:text-left w-full min-h-[50vh] lg:min-h-[25vh] lg:py-0 group hover:bg-[#FFFFFF] transition ease-in-out duration-500 cursor-pointer lg:px-10 lg:border-b-1 lg:border-[#474747]/20"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-[32px] lg:container lg:mx-auto lg:px-10 py-[64px]">
              <div className="flex flex-col lg:items-start gap-[16px]">
                <div>
                    <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
                    {personalName}
                  </h3>
                  <p className="text-[0.9rem] text-[#474747] tracking-[0.5%] leading-[150%]">
                    {projectDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <span className="text-[0.8rem] text-[#474747]">
                    {techHead}
                  </span>
                  <div className="flex gap-[8px] justify-center">
                    {tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end justify-center gap-[16px]">
              <div className="flex gap-[16px]">
                <span className="flex mx-auto lg:mx-0 gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">
                <CiUser className="w-4 h-4" /> {user}
                </span>
                <span className="flex mx-auto lg:mx-0 gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">
                  <CiCalendar className="w-4 h-4" /> {date}
                </span>
              </div>
                <p className="max-w-prose">{review}</p>

                <div className="flex flex-col gap-[16px]">
                  <span className="flex mx-auto gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">
                    {feedHead}
                  </span>
                  <Stars rating={rating} />
                </div>
              </div>
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
}
