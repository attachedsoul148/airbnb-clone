import Image from 'next/image'
import React from 'react'

type Props = {
  img: string
  title: string
  description: string
  buttonText: string
}

const LargeCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <div className="relative min-w-[300px] h-96">
      <Image src={img} fill alt="logo" className="rounded-2xl object-cover" />
      <div className="absolute top-16 left-10 flex flex-col space-y-4">
        <h3 className="sm:text-4xl w-64 text-3xl">{title}</h3>
        <p className="text-sm sm:text-lg">{description}</p>

        <button
          className="bg-gray-900 cursor-pointer text-white font-bold max-w-[150px] 
        py-2 rounded-lg text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default LargeCard
