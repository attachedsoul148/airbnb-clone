import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Map from '@/components/Map'
import StayCard from '@/components/StayCard'
import { StayType } from '@/types'
import { format } from 'date-fns'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  staysInfo: StayType[]
}

const Search = ({ staysInfo }: Props) => {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = startDate && format(new Date(startDate as string), 'dd MMMM yyyy')
  const formattedEndDate = endDate && format(new Date(endDate as string), 'dd MMMM yyyy')

  const dateStr = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className="h-screen scrollbar-hide overflow-scroll">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder={`${dateStr} | ${location} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow">
          <div className="p-5 md:p-10">
            <p className="text-xs">
              300+Stays - {dateStr} - for {noOfGuests} guests
            </p>
            <h2 className="font-semibold text-2xl sm:text-3xl my-6">Stays in {location}</h2>

            <div className="hidden lg:flex space-x-4">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col first:border-t -mt-4 md:-mt-0">
              {staysInfo.map((item) => (
                <StayCard key={item.img} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="hidden xl:block xl:min-w-[600px]">
          <Map places={staysInfo} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export const getServerSideProps = async () => {
  const staysInfo: StayType[] = await fetch('https://www.jsonkeeper.com/b/5NPS').then((res) =>
    res.json(),
  )

  return {
    props: {
      staysInfo,
    },
  }
}