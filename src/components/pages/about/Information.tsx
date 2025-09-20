import React from "react";

import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { FiLayout, FiCode, FiCpu, FiEdit, FiUsers } from "react-icons/fi";

export default function Information() {
  return (
    <>
      <section className="py-[64px] bg-[var(--bg-secondary)]">
        <div className="container mx-auto flex flex-col gap-[32px] px-10">
          <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[5rem] lg:justify-between">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              About me.
            </h3>
            <div className="flex flex-col gap-[16px] mt-[2rem]">
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                As I mentioned earlier, my name is Erik Dunca, I’m 23 years old
                and I come from eastern Slovakia. My passion for creating
                websites started back in high school, where it was briefly
                introduced to us during a programming class. From that moment, I
                knew this was something I wanted to pursue fully.
              </p>
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                I gradually traded my gaming time for watching tutorials to
                master the basics, and I started building websites for my
                classmates for a small fee. When they came to me for help, I
                felt special – and above all, happy that I could be useful to
                someone.
              </p>
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                Over time, I took on larger projects – whether it was a website
                for a gaming clan or a newly founded company. I always managed
                to figure things out and often went the extra mile, doing work
                that wasn’t even requested – simply because I truly enjoy what I
                do.
              </p>
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                Eventually, I decided to commit to this path completely and
                start my own business. Helping people grow their ideas into
                something bigger – and receiving their genuine gratitude in
                return – is an amazing feeling for me.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[64px] bg-[var(--bg-primary)]">
        <div className="container mx-auto flex flex-col gap-[32px] px-10">
          <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[5rem] lg:justify-between">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              How I work.
            </h3>
            <div className="flex flex-col gap-[16px] mt-[2rem]">
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                My process begins with a discussion with the client to fully
                understand their goals and vision. From there, I analyze the
                brand to ensure that every design decision aligns with its
                identity and values. If the client does not have a pre-defined
                design, I create one tailored specifically to their brand.
              </p>
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                For example, a website for a suit retailer would use a clean
                black-and-white design to convey elegance and simplicity, while
                a website for a gaming community might feature more vibrant
                colors and dynamic visuals to capture attention and showcase
                energy within that space.
              </p>
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                Once the design direction is set, I start building the layout,
                keeping it clean and user-friendly. Each section is presented to
                the client as it is completed, allowing for feedback and
                adjustments before moving on. This ensures that the project
                stays aligned with the client’s expectations.
              </p>
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                Approved sections are finalized and I move forward without
                revisiting them, keeping the process efficient. This approach
                allows both the client and me to save time, maintain momentum,
                and deliver a high-quality product as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[64px] bg-[var(--bg-secondary)]">
        <div className="container mx-auto flex flex-col gap-[32px] px-10">
          <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[5rem] lg:justify-between">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              My skills.
            </h3>
            <div className="flex flex-col gap-[16px] mt-[2rem]">
              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
                Through different projects, I’ve gained experience with
                technologies and tools that allow me to build modern and
                functional websites. My main technical skills include:
              </p>

              <ul className="flex flex-col gap-[16px]">
                <li className="flex items-center gap-[8px]">
                  <SiHtml5 className="text-orange-600 w-7 h-7" /> HTML & CSS
                </li>
                <li className="flex items-center gap-[8px]">
                  <SiNextdotjs className="text-black w-7 h-7" /> Next.js
                </li>
                <li className="flex items-center gap-[8px]">
                  <SiTailwindcss className="text-blue-400 w-7 h-7" /> Tailwind
                  CSS
                </li>
                <li className="flex items-center gap-[8px]">
                  <SiGithub className="text-gray-800 w-7 h-7" /> GitHub
                </li>
              </ul>

              <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose mt-6">
                Beyond the technical side, I also focus on the outcome – making
                websites look professional, reflect the brand’s identity, and
                remain easy to use. My main focus areas are:
              </p>

              <ul className="flex flex-col gap-[16px]">
                <li className="flex items-center gap-[8px]">
                  <FiLayout className="text-black w-7 h-7" /> Responsive and
                  modern layouts
                </li>
                <li className="flex items-center gap-[8px]">
                  <FiCode className="text-black w-7 h-7" /> Clean and
                  maintainable code
                </li>
                <li className="flex items-center gap-[8px]">
                  <FiCpu className="text-black w-7 h-7" /> Performance and
                  usability optimization
                </li>
                <li className="flex items-center gap-[8px]">
                  <FiEdit className="text-black w-7 h-7" /> Brand-aligned design
                  decisions
                </li>
                <li className="flex items-center gap-[8px]">
                  <FiUsers className="text-black w-7 h-7" /> Effective
                  communication and collaboration with clients
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
