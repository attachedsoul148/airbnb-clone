import Image from 'next/image'
import { DateRangePicker, DateRange, RangeKeyDict } from 'react-date-range'
import React, { useState } from 'react'
import {
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  Bars3Icon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useRouter } from 'next/router'

type Props = {
  placeholder?: string
}

const Header = ({ placeholder }: Props) => {
  const [search, setSearch] = useState('')
  const [noOfGuests, setNoOfGuests] = useState('1')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showSmallInput, setShowSmallInput] = useState(false)
  const [smallInput, setSmallInput] = useState('')

  const router = useRouter()

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date)
    setEndDate(ranges.selection.endDate as Date)
  }
  return (
    <header className="grid-cols-2 sticky z-50 top-0 grid sm:grid-cols-3 bg-white p-5 md:px-10 shadow">
      <div className="relative h-10 cursor-pointer" onClick={() => router.push('/')}>
        <Image
          src="https://links.papareact.com/qd3"
          fill
          alt="logo"
          className="object-contain object-left"
        />
      </div>

      <div className="hidden sm:flex items-center justify-center md:border-2 md:shadow-sm rounded-full py-2 px-2">
        <input
          type="text"
          className="outline-none flex-grow px-3 placeholder-gray-400"
          placeholder={placeholder || 'Start your search'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MagnifyingGlassIcon
          className="hidden lg:inline h-8 w-8 p-1 bg-red-400 text-white rounded-full 
        cursor-pointer hover:scale-105 transition duration-150"
        />
      </div>

      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden lg:inline hover:text-red-400 cursor-pointer">Become a host</p>
        <GlobeAmericasIcon className="h-6 w-6 cursor-pointer" />
        <div className="flex border-2 rounded-full py-2 px-2 space-x-2">
          <Bars3Icon className="h-6 w-6 cursor-pointer" />
          <UserCircleIcon className="h-6 w-6 cursor-pointer" />
          <MagnifyingGlassIcon
            className="inline sm:hidden h-6 w-6 cursor-pointer"
            onClick={() => setShowSmallInput((prev) => !prev)}
          />
        </div>
      </div>

      {showSmallInput && (
        <div className="flex flex-col items-center max-w-2xl mx-auto col-span-3 mt-3">
          <div className="flex items-center justify-center w-full rounded-full py-2 px-2">
            <input
              type="text"
              className="outline-none flex-grow px-3 placeholder-gray-400"
              placeholder={placeholder || 'Start your search'}
              value={smallInput}
              onChange={(e) => setSmallInput(e.target.value)}
            />
          </div>

          <div className="block sm:hidden">
            <DateRange
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
            />
          </div>

          <div className="flex w-full border-b pb-3">
            <h3 className="flex-grow font-semibold text-2xl">Number of Guests</h3>
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-8 pr-3 outline-none text-red-400"
              min={1}
              max={20}
            />
          </div>

          <div className="flex w-full mt-3">
            <button
              className="flex-grow font-semibold py-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setSmallInput('')}>
              Cancel
            </button>
            <button
              className="flex-grow text-red-400 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => {
                router.push({
                  pathname: '/search',
                  query: {
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    location: smallInput,
                    noOfGuests,
                  },
                })
                setSmallInput('')
              }}>
              Search
            </button>
          </div>
        </div>
      )}

      {search && (
        <div className="flex flex-col items-center max-w-2xl mx-auto col-span-3 mt-3">
          <div className="hidden sm:block">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
            />
          </div>

          <div className="flex w-full border-b pb-3">
            <h3 className="flex-grow font-semibold text-2xl">Number of Guests</h3>
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-8 outline-none text-red-400"
              min={1}
              max={20}
            />
          </div>

          <div className="flex w-full mt-3">
            <button
              className="flex-grow font-semibold py-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setSearch('')}>
              Cancel
            </button>
            <button
              className="flex-grow text-red-400 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => {
                router.push({
                  pathname: '/search',
                  query: {
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    location: search,
                    noOfGuests,
                  },
                })
                setSearch('')
              }}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
