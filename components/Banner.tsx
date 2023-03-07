import Image from 'next/image'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="https://links.papareact.com/0fm" alt="banner" fill className="object-cover" />
      <div className="absolute top-1/2 w-full text-center -my-10">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          className="bg-white px-10 py-4 rounded-full text-red-400 font-bold 
            shadow-md my-3 active:scale-90 hover:shadow-xl transition-all duration-150">
          I{"'"}m flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
