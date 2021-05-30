import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapLeaf = () =>
{
    return(
        <div className = "mapStyles">
            <MapContainer center={[-17.783423175262136, -63.18209666501422]} zoom={14}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position = {[-17.783423175262136, -63.18209666501422]}>
                    <Popup>
                        <b>Calle Junín número 33</b>
                    </Popup>
                </Marker> 
            </MapContainer>
        </div>
        
    )
}

export default MapLeaf;

