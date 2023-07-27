import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import fromIcon from './icons/fromIcon.png';
import toIcon from './icons/toIcon.png';

const toMarker = new L.Icon({
  iconUrl: toIcon,
  iconSize: [32, 32],
  iconAnchor: [12, 32],
  popupAnchor: [1, -34],
});

const fromMarker = new L.Icon({
  iconUrl: fromIcon,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  iconSize: [32, 32],
  iconAnchor: [12, 32],
  popupAnchor: [1, -34],
  shadowSize: [32, 32],
});

const createRoutineMachineLayer = ({ coords }) => {
  const instance = L.Routing.control({
    waypoints: coords.map((coord) => L.latLng(...coord)),
    lineOptions: {
      styles: [{ color: '#fe0006', weight: 6, opacity: 0.4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    language: 'ru',
    createMarker: (i, wp) => {
      if (i === 0) {
        return L.marker(wp.latLng, {
          icon: fromMarker,
        });
      }
      return L.marker(wp.latLng, {
        icon: toMarker,
      });
    },
  });

  return instance;
};

const MapRoutingMachine = createControlComponent(createRoutineMachineLayer);

export default MapRoutingMachine;
