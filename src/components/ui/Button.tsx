import { MoveRight } from 'lucide-react'
import React, { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'relative overflow-hidden flex items-center lg:items-start rounded-[5px] p-[15px] text-[0.8rem] tracking-[0.5%] leading-[150%] uppercase font-bold cursor-pointer before:content-[""] before:absolute before:left-0 before:top-0 before:h-full before:w-[35%] before:rounded-[50px] before:transition-all before:duration-300 hover:before:w-full before:z-0'

  const variantStyles =
    variant === 'primary'
      ? 'text-black before:bg-[#3E3E3E]/30'
      : 'text-white before:bg-[#3E3E3E]/30'

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`}>
      <span className="relative z-10 flex items-center">
        {children}
        <MoveRight className="w-[0.8rem] h-[0.8rem] ml-[8px]" />
      </span>
    </button>
  )
}
