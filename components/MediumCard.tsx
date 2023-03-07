import { LivingType } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = LivingType

const MediumCard = ({ img, title }: Props) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition-all duration-300 ease-out">
      <div className="relative w-60 h-60 sm:w-80 sm:h-80">
        <Image src={img} fill alt="logo" className="rounded-xl" />
      </div>
      <h3 className="sm:text-2xl mt-3 text-xl">{title}</h3>
    </div>
  )
}

export default MediumCard
