import React from 'react'
import { GeolocationControl, Map, Placemark, RouteButton, YMaps } from 'react-yandex-maps'

const mapProps = {
  width: '100%',
  height: '50rem',
  options: { },
  state: {
    center: [61.680429561768634, 50.800528999999926],
    zoom: 18
  }
}
const BlockMap = () => {
  return (
    <YMaps>
      <Map {...mapProps} >
        <GeolocationControl options={{ float: 'left' }} />
        <RouteButton options={{ float: 'right' }} />
        <Placemark options={{ preset: 'islands#violetRepairShopCircleIcon' }} geometry={[61.680429561768634, 50.800528999999926]} />
      </Map>
    </YMaps>
  )
}
export default React.memo(BlockMap)
