import React from 'react'

export default function Quote() {
  return (
    <section className="py-[64px] px-10 bg-[var(--bg-primary)]">
        <div className="container mx-auto flex flex-col gap-[8px] text-center">
            <span className="text-[1.2rem] tracking-[-2%] leading-[110%] font-semibold">Perform every act in your life as though it were your last.</span>
            <span className="ml-auto lg:ml-[25rem] italic">– Marcus Aurelius</span>
        </div>
    </section>
  )
}
