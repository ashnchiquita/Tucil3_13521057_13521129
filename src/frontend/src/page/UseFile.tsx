import { useFilePicker, FileContent } from "use-file-picker";
import { Box, Text, Flex, Button, Switch, VStack, HStack, Heading } from "@chakra-ui/react"
import { PageTemplate } from '../layout/Template';
import { GraphMatrix } from "../class/GraphMatrix";
import { Path } from "../class/Path";
import { MapContainer, TileLayer, Popup, Marker, Polyline } from "react-leaflet";
import { Node } from "../class/Node";
import { useState } from "react";

const arrayRange = (start: number = 0, stop: number, step: number = 1) =>
    Array.from(
    { length: (stop - start) / step },
    (value, index) => start + index * step
    );

const Blue = { color: 'blue' }
const Red = { color: 'red' }

function baseMap() {
  return (
    <MapContainer center={[-6.893036, 107.610444]} zoom={20} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
  </MapContainer>
  )
}

function baseGraph(fileStr: string) {
  let graph: GraphMatrix = new GraphMatrix(fileStr);
  let nodes: { [key: number]: Node } = graph.getNodeMap();
  let nNodes = graph.getLength();
  let iArr = arrayRange(0,nNodes);
  let allpolylines = graph.getAllPolyLine();
  return (
    <MapContainer center={nodes[0].getCoordinate().getPosArr()} zoom={20} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {iArr.map(i => <Marker position={nodes[i].getCoordinate().getPosArr()}>
        <Popup>
          {nodes[i] !== undefined? nodes[i].getName() : "undefined"}
        </Popup>
      </Marker>)}
      <Polyline pathOptions={Blue} positions={allpolylines}/>
    </MapContainer>
  )
}

function route (fileStr: string, isUCS: boolean = true, isBase: boolean) {
  let graph: GraphMatrix = new GraphMatrix(fileStr);
  let searchPath: Path = isUCS ? graph.searchUCS(0,9) : graph.searchAStar(7,3);
  let nodes: { [key: number]: Node } = graph.getNodeMap();
  let nNodes = graph.getLength();
  let iArr = arrayRange(0,nNodes);
  let allpolylines = graph.getAllPolyLine();
  let polylineanswer = graph.getPolylineArr(searchPath);
  return (
    <MapContainer center={nodes[0].getCoordinate().getPosArr()} zoom={20} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      {iArr.map(i => <Marker position={nodes[i].getCoordinate().getPosArr()}>
        <Popup>
        {nodes[i] === undefined? "undefined" : nodes[i].getName()}
        </Popup>
      </Marker>)}
      <Polyline pathOptions={Blue} positions={allpolylines}/>
      {!isBase ? <Polyline pathOptions={Red} positions={polylineanswer}/> : null}
    </MapContainer>
    )
  }

function allMap(isUploaded: boolean, isRouteFound: boolean, isUCS: boolean, file: FileContent[]) {
  if (isUploaded && isRouteFound) {
    return route(file[0].content, isUCS, false);
  } else if (isUploaded) {
    return route(file[0].content, isUCS, true);
  } else {
    return baseMap();
  }
}

export const UseFile = () =>  {
    const [isUCS, setIsUCS] = useState(true);
    const [isRouteFound, setIsRouteFound] = useState(false);

    const [openFileSelector, { filesContent, loading }] = useFilePicker({
      accept: ".txt"
    });

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <PageTemplate title="Text">
        <Flex
          w="100%"
          px={0}
          py={0}
          bg="#1A202B"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          position="sticky"
          left="0"
          zIndex="990"
        >
          {allMap(filesContent.length != 0, isRouteFound, isUCS, filesContent)}
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="100vh"
            position="relative"
            rowGap={30}
            // mx='3em'
            bg="#1A202B"
            w='30%'
          >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="100vh"
            position="relative"
            rowGap={30}
            // mx='3em'
            bg="#1A202B"
          >
            <VStack spacing = {3}>
              <Box bg = 'white' borderRadius="20px" w = '100%'>
                <Text fontSize="1em" color ="black" mx = '10' my = '1' >
                {filesContent.length == 1 ? filesContent[0].name : "No file selected"}
                </Text>
              </Box>
              <Button
                onClick={() => openFileSelector()}
                background="#8669FA"
                borderRadius="20px"
                mt='0.5em'
                lineHeight="92%"
                fontSize='1em'
                _hover={{
                  transform: 'scale(1.1)'
                }}
                color = 'white'
              >
              Select File
            </Button>
            </VStack>
            <VStack spacing={2}>
              <Heading size = 'md' color ="white" mx = '10' mb = '0.1em' >
                Algorithm
              </Heading>
              <HStack>
                <Text fontSize="1em" fontWeight="bold" color ="white" >
                  A*
                </Text>
                <Switch colorScheme='purple' size='lg'
                  alignSelf='center'
                  onChange={() => setIsUCS(!isUCS)}
                  checked={isUCS}
                ></Switch>
                <Text fontSize="1em" fontWeight="bold" color ="white">
                  UCS
                </Text>
              </HStack>
            </VStack>
            <Button
              onClick={() => setIsRouteFound(true)}
              background="#8669FA"
              borderRadius="20px"
              mt='0.5em'
              lineHeight="92%"
              fontSize='1em'
              _hover={{
                transform: 'scale(1.1)'
              }}
              color = 'white'
            >
              Find Route
            </Button>
            </Flex>
          </Flex>
        </Flex>
      </PageTemplate>
    );
}
