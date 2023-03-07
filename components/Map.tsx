import { StayType } from '@/types'
import React, { useState } from 'react'
import { Map as MapBox, Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
import 'mapbox-gl/dist/mapbox-gl.css'

type Props = {
  places: StayType[]
}

const Map = ({ places = [] }: Props) => {
  const [selectedPlace, setSelectedPlace] = useState<StayType | null>(null)

  const coordinates = places?.map((place) => ({
    latitude: place.lat,
    longitude: place.long,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    //@ts-ignore
    latitude: center.latitude,
    //@ts-ignore
    longitude: center.longitude,
    zoom: 11,
  })

  console.log(selectedPlace)
  return (
    <MapBox
      initialViewState={viewport}
      mapStyle="mapbox://styles/attachedsoul148/cleye2hqb000501monzhd33l2"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(e) => setViewport(e.viewState)}
      style={{ width: '100%', height: '100%' }}
      {...viewport}>
      {places?.map((place) => (
        <div key={place.long}>
          <Marker latitude={place.lat} longitude={place.long}>
            <p
              className="cursor-pointer animate-bounce text-2xl z-10"
              onClick={() => setSelectedPlace(place)}
              aria-label="push-pin">
              📌
            </p>
          </Marker>

          {selectedPlace?.long === place.long ? (
            <Popup
              longitude={selectedPlace?.long}
              latitude={selectedPlace?.lat}
              closeOnClick={false}
              onClose={() => setSelectedPlace(null)}>
              {selectedPlace?.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </MapBox>
  )
}

export default Map
