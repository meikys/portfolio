import Image from "next/image";

export default function DeveloperDesk() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-[64px] px-10 bg-[var(--bg-secondary)]">
        <div className="container mx-auto grid place-items-center grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-[16px]">
            <p className="text-[1rem] lg:text-[1.5rem] text-[#000000] tracking-[0.5%] lg:tracking-[1%] leading-[150%] lg:leading-[180%] text-center lg:w-[450px] lg:h-[400px] order-2 lg:order-none">
               Hi! I’m glad you’re here. My name is <b>Erik Dunca</b>, and I’m a web designer with a keen eye for detail. I help people <b>launch</b> their ideas or take existing projects to the next level. In my work, I combine <b>aesthetics</b> with <b>functionality</b> so your business looks professional and keeps <b>growing</b>.
            </p>
            <div className="order-4 lg:order-none"></div>
            <Image src="/myphoto.png" width={500} height={500} alt="Rectangle shape" objectFit="contain" className="w-[200px] lg:w-[500px] h-[200px] lg:h-[500px] order-1 lg:order-none rounded-full lg:rounded-none shadow-xl" />
            <p className="text-[1rem] lg:text-[1.5rem] text-[#000000] tracking-[0.5%] lg:tracking-[1%] leading-[150%] lg:leading-[180%] text-center lg:w-[450px] lg:h-[400px] order-3 lg:order-none">
                I believe a great website is more than just an online <b>business card</b> – it’s a tool that helps projects truly grow. A functional, user-friendly <b>website increases</b> reach, improves communication with clients, and <b>automates processes</b>, allowing you to focus on <b>developing your business</b>. Ideas turn into results, and projects gain the <b>sustainable</b> growth they deserve.
            </p>
        </div>
    </section>
  )
}
