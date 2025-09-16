import Image from "next/image";

export default function DeveloperDesk() {
  return (
    <section className="flex flex-col lg:items-center justify-center min-h-screen pb-save-top pb-safe-bottom px-10 bg-[var(--bg-secondary)]">
      <h2 className="text-[2rem] tracking-[-2%] leading-[110%] font-bold mb-[16px] lg:hidden">Deeper ...</h2>
        <div className="container mx-auto grid items-center grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-[16px]">
            <p className="text-[1rem] lg:text-[1.5rem] text-[#000000] tracking-[0.5%] lg:tracking-[1%] leading-[150%] lg:leading-[180%] order-2 lg:order-none max-w-[500px] prose">
               Hi! I’m glad you’re here. My name is <b>Erik Dunca</b>, and I’m a web designer with a keen eye for detail. I help people <b>launch</b> their ideas or take existing projects to the next level. In my work, I combine <b>aesthetics</b> with <b>functionality</b> so your business looks professional and keeps <b>growing</b>.
            </p>
            <div className="order-4 lg:order-none"></div>
            <Image src="/myphoto.png" width={500} height={500} alt="Rectangle shape" objectFit="contain" className="hidden lg:block w-[100px] lg:w-auto h-[100px] lg:h-auto order-1 lg:order-none rounded-full lg:rounded-none shadow-xl" />
            <p className="text-[1rem] lg:text-[1.5rem] text-[#000000] tracking-[0.5%] lg:tracking-[1%] leading-[150%] lg:leading-[180%] order-3 lg:order-none max-w-[500px] prose">
                I believe a great website is more than just an online <b>business card</b> – it’s a tool that helps projects truly grow. A functional, user-friendly <b>website increases</b> reach, improves communication with clients, and <b>automates processes</b>, allowing you to focus on <b>developing your business</b>. Ideas turn into results, and projects gain the <b>sustainable</b> growth they deserve.
            </p>
        </div>
    </section>
  )
}
