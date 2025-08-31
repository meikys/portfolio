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
            <p className="text-[1rem] lg:text-[1.5rem] text-[#000000] tracking-[0.5%] lg:tracking-[1%] leading-[150%] lg:leading-[180%] lg:w-[450px] lg:h-[400px] order-3 lg:order-none max-w-prose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              eos eius ab, sed consequuntur, quaerat minus quidem neque ratione
              quisquam qui accusamus dolor corporis voluptatem et placeat.
              Temporibus, sit velit.
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
