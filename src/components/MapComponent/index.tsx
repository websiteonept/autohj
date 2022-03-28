import L from 'leaflet';
import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { MapContainer } from './styles';   

const MapComponnent: React.FC = () => {

    var myIcon = L.icon({
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon.png',
        iconSize: [50, 50],
        iconAnchor: [50,  50],
        popupAnchor: [-25, -50],
        shadowUrl: 'transparent.png',
        shadowRetinaUrl: 'transparent.png',
        shadowSize: [1, 1],
        shadowAnchor: [1, 1]
    });
 

    return (
        <MapContainer>
        <Map
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            center={[38.7943866, -9.1587044]}
            zoom={13}
            style={{  width: '100%', height: "100%"   }}
        > 
             <Marker position={[38.797250, -9.160160]} icon={myIcon}  >
                <Popup autoPan>
                    <strong>Rua 25 de Abril, 42B</strong> <br /> 2620-041 - Odivelas.
                </Popup>
             </Marker>
              
            <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFuaWxvZmFjY28iLCJhIjoiY2tna3BmcHpwMDlpOTJ5cGNleDlhY2Q2aCJ9.qsf9scd3gfOOzMfYCB6IyA
" />
           
        </Map>
        </MapContainer>

    );
}

export default MapComponnent