import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';
import MapRoutingMachine from './MapRoutingMachine';
import { useSelector } from 'react-redux';
import getCoords from '../../helpers/getCoords';

export default function Map() {
  const coords = useSelector((state) => getCoords(state.wayPoints.currentWayPoint));

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MapRoutingMachine
        key={coords}
        coords={coords}
      />
    </MapContainer>
  );
}
