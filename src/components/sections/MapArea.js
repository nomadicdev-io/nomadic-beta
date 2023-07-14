import Map, { Marker } from 'react-map-gl';
import { MapMarket, MapWrapper } from "@/styles/components"
import 'mapbox-gl/dist/mapbox-gl.css';

const MapArea = ({center}) => {


  return (
    <MapWrapper>
        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            initialViewState={{
                longitude: center[0],
                latitude: center[1],
                zoom: 6  
            }}
            style={{width: '100%', height: '100%'}}
            mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
        >
            <Marker longitude={center[0]} latitude={center[1]} anchor={false} />
        </Map>
    </MapWrapper>
  )
}

export default MapArea