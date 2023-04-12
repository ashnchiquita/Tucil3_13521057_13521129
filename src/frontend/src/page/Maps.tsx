// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
// import { PageTemplate, PageTemplate2 } from '../layout/Template';
// import React, { useRef, useState, useMemo, useCallback, Component } from 'react';
// import './Maps.css';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import { Container, HStack, Heading, VStack, Flex, Box } from '@chakra-ui/react';

// const icon = L.icon({
//     iconSize: [25, 41],
//     iconAnchor: [10, 41],
//     popupAnchor: [2, -40],
//     iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
//     shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
//   });

//   function MyComponent({ saveMarkers }) {
//     const map = useMapEvents({
//       click: (e) => {
//         const { lat, lng } = e.latlng;
//         L.marker([lat, lng], { icon }).addTo(map);
//         saveMarkers([lat, lng]);
//       }
//     });
//     return null;
//   }
// class MyMap extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         markers: [[40.7, -74]],
//         data: []
//       };
//     }
  
//     saveMarkers = (newMarkerCoords) => {
//       const data = [...this.state.data, newMarkerCoords];
//       this.setState((prevState) => ({ ...prevState, data }));
//     };
  
//     render() {
//       return (
//         <div>
//           <MapContainer
//             className="Map"
//             center={{ lat: 40.7, lng: -74 }}
//             zoom={15}
//             scrollWheelZoom={false}
//             style={{ height: "100vh" }}
//           >
//             <TileLayer
//               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <MyComponent saveMarkers={this.saveMarkers} />
//           </MapContainer>
//         </div>
//       );
//     }
//   }

export const a = () => { return 1; };