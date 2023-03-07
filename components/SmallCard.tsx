import { ExploreType } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = ExploreType

const SmallCard = ({ img, location, distance }: Props) => {
  return (
    <div className='flex space-x-4 items-center hover:bg-gray-100 hover:scale-105 transition-all 
    duration-150 ease-out cursor-pointer rounded-lg'>
      <div className="relative w-16 h-16">
        <Image src={img} fill alt="logo" className="rounded-lg" />
      </div>

      <div>
        <p>{location}</p>
        <p className='text-gray-500'>{distance}</p>
      </div>
    </div>
  )
}

export default SmallCard
