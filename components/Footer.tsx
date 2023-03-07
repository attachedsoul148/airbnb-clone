import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer
      className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 py-14 px-32 md:px-0 gap-10
     text-gray-600 text-xs md:place-items-center mt-5">
      <div className="space-y-4">
        <h5 className="uppercase font-bold text-gray-800">About</h5>
        <p className="cursor-pointer">How Airbnb works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Plus</p>
        <p className="cursor-pointer">Airbnb Luxe</p>
      </div>

      <div className="space-y-4">
        <h5 className="uppercase font-bold text-gray-800">Community</h5>
        <p className="cursor-pointer">Accesebility</p>
        <p className="cursor-pointer">This is not real site</p>
        <p className="cursor-pointer">Its a pretty awesome clone</p>
        <p className="cursor-pointer">Refferals accepted</p>
        <p className="cursor-pointer">Attached soul</p>
      </div>

      <div className="space-y-4">
        <h5 className="uppercase font-bold text-gray-800">Host</h5>
        <p className="cursor-pointer">Papa React</p>
        <p className="cursor-pointer">Presets</p>
        <p className="cursor-pointer">Zero to Hero</p>
        <p className="cursor-pointer">Hundreds of Students</p>
        <p className="cursor-pointer">Reklamka kursu</p>
      </div>

      <div className="space-y-4">
        <h5 className="uppercase font-bold text-gray-800">Support</h5>
        <p className="cursor-pointer">Help Centre</p>
        <p className="cursor-pointer">Trust & Safety</p>
        <p className="cursor-pointer">Youtube Course</p>
        <p className="cursor-pointer">Easter Eggs</p>
        <p className="cursor-pointer">For the Win</p>
      </div>
    </footer>
  )
}

export default Footer
