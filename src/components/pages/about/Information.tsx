import React from "react";

export default function Information() {
  return (
    <>
      <section className="py-[64px] bg-[var(--bg-secondary)]">
        <div className="container flex flex-col gap-[32px] px-10">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              About me.
            </h3>
            <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
              As I mentioned earlier, my name is Erik Dunca, I’m 23 years old
              and I come from eastern Slovakia. My passion for creating websites
              started back in high school, where it was briefly introduced to us
              during a programming class. From that moment, I knew this was
              something I wanted to pursue fully.
            </p>
            <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
              I gradually traded my gaming time for watching tutorials to master
              the basics, and I started building websites for my classmates for
              a small fee. When they came to me for help, I felt special – and
              above all, happy that I could be useful to someone.
            </p>
            <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
              Over time, I took on larger projects – whether it was a website
              for a gaming clan or a newly founded company. I always managed to
              figure things out and often went the extra mile, doing work that
              wasn’t even requested – simply because I truly enjoy what I do.
            </p>
            <p className="text-[1rem] text-[#000000] tracking-[0.5%] leading-[150%] max-w-prose">
              Eventually, I decided to commit to this path completely and start
              my own business. Helping people grow their ideas into something
              bigger – and receiving their genuine gratitude in return – is an
              amazing feeling for me.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[64px] bg-[var(--bg-primary)]">
        <div className="container flex flex-col gap-[32px] px-10">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              How I work.
            </h3>
            <p className="text-[1rem] lg:text-[1.5rem] text-[#000000] tracking-[0.5%] lg:tracking-[1%] leading-[150%] lg:leading-[180%] lg:w-[450px] lg:h-[400px] order-3 lg:order-none max-w-prose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              eos eius ab, sed consequuntur, quaerat minus quidem neque ratione
              quisquam qui accusamus dolor corporis voluptatem et placeat.
              Temporibus, sit velit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[64px] bg-[var(--bg-secondary)]">
        <div className="container flex flex-col gap-[32px] px-10">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              My skills.
            </h3>
            <p className="text-[1rem] lg:text-[1.5rem] text-[#000000] tracking-[0.5%] lg:tracking-[1%] leading-[150%] lg:leading-[180%] lg:w-[450px] lg:h-[400px] order-3 lg:order-none max-w-prose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              eos eius ab, sed consequuntur, quaerat minus quidem neque ratione
              quisquam qui accusamus dolor corporis voluptatem et placeat.
              Temporibus, sit velit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
