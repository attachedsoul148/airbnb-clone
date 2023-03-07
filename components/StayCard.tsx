import { StayType } from '@/types'
import Image from 'next/image'
import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

type Props = StayType

const StayCard = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2  sm:space-y-0  sm:flex-row space-x-4 border-b p-5 md:px-10 cursor-pointer hover:shadow-xl hover:opacity-80">
      <div className="relative h-52 sm:w-52 md:w-80 md:h-52 flex-shrink-0">
        <Image fill src={props.img} alt="preview" className="object-cover rounded-2xl" />
      </div>

      <div className="flex flex-col flex-grow pr-4 space-y-2">
        <div className="flex justify-between">
          <p>{props.location}</p>

          <HeartIcon className="w-6 h-6" />
        </div>

        <h2 className="text-xl">{props.title}</h2>

        <div className="border-b w-10 pt-2" />

        <p className="text-xs sm:text-sm text-gray-500 flex-grow pt-2">{props.description}</p>

        <div className="flex justify-between items-end">
          <div className="flex items-center">
            <StarIcon className="text-red-400 w-4 h-4" />
            <p>{props.star}</p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-lg font-semibold lg:text-2xl">{props.price}</p>
            <p className="text-sm  sm:text-md font-extralight">{props.total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StayCard
