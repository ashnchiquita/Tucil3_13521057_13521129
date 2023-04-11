import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { PageTemplate, PageTemplate2 } from '../layout/Template';
import React, { useRef, useState, useMemo, useCallback } from 'react';
import './Maps.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Container, HStack, Heading, VStack, Flex, Box } from '@chakra-ui/react';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const center = {
  lat: 51.505,
  lng: -0.09,
}
function DraggableMarker() {
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef<any>(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  )
}

export const UseMaps = () => (
  <PageTemplate2 title = "Maps">
    <Flex
      w="100%"
      px={0}
      py={0}
      bg="blue.600"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker />
      </MapContainer>
      <Box maxH = '100%' maxW = '40%' bg='#000000'>
        <Heading> Coming Soon...</Heading>
      </Box>
    </Flex>
  </PageTemplate2>
);
