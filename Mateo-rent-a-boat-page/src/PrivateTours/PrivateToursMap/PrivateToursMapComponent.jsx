import './PrivateToursMapStyle.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function PrivateToursMapComponent() {
    const locations = [
        { position: [44.1194, 15.2314], name: 'Zadar, Croatia' },
        { position: [43.8486, 15.0782], name: 'Kornati, Croatia' },
        { position: [44.0812, 15.2170], name: 'Preko, Croatia' },
        { position: [44.0563, 15.2044], name: 'Dugi otok, Croatia' },
        { position: [44.2011, 15.1874], name: 'Zaton, Croatia' },
    ];

    return (
        
        
        <div className="leaflet-map-container">
            <MapContainer center={[44.1194, 15.2314]} zoom={8} className="leaflet-map">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location, index) => (
                    <Marker key={index} position={location.position}>
                        <Popup>{location.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
            
    );
}

export default PrivateToursMapComponent;