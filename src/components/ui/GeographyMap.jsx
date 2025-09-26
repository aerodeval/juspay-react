import React from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl =
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"

  const markers = [
    { name: "New York", coordinates: [-74.006, 40.7128] },
    { name: "London", coordinates: [-0.1276, 51.5074] },
    { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  ];

export default function GeographyMap() {
  return (
<ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}      
            fill="#a8c5da"       // light blue fill
            stroke="#ffffff"     // darker blue border
            strokeWidth={1} />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle  r={10} fill="#95a4fc" stroke="#FFFFFF" strokeWidth={5} />
        </Marker>
      ))}
    </ComposableMap>
  )
}
