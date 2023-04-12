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
    <MapContainer center={[-6.893036, 107.610444]} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
  </MapContainer>
  )
}

function route (fileStr: string, isUCS: boolean = false, isBase: boolean) {
  let graph: GraphMatrix = new GraphMatrix(fileStr);
  let nodes: { [key: number]: Node } = graph.getNodeMap();
  let nNodes = graph.getLength();
  let iArr = arrayRange(0,nNodes);
  let allpolylines = graph.getAllPolyLine();
  let searchPath: Path = isUCS ? graph.searchUCS(0, nNodes - 1) : graph.searchAStar(0, nNodes - 1);
  let polylineanswer = graph.getPolylineArr(searchPath);
  return (
    <VStack>
    <MapContainer center={nodes[0].getCoordinate().getPosArr()} zoom={17} scrollWheelZoom={false}>
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
    <Box>
      <Text color={'white'}>
        Path Cost : {!isBase ? searchPath.getPrio() + ' meter' : '-'}
      </Text>
    </Box>
    </VStack>
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
    const [isUCS, setIsUCS] = useState(false);
    const [isRouteFound, setIsRouteFound] = useState(false);

    const [openFileSelector, { filesContent, loading }] = useFilePicker({
      accept: ".txt"
    });

    function wrapper() {
      setIsRouteFound(false);
      return openFileSelector();
    }

    function wrapper2() {
      setIsRouteFound(false);
      setIsUCS(!isUCS);
    }

    if (loading) {
      return <>Loading...</>;
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
                onClick={() => wrapper()}
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
                  onChange={() => wrapper2()}
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
          {/* { filesContent.length > 0 ? route(filesContent[0].content, isUCS, false) : baseMap()} */}
          {allMap(filesContent.length == 1, isRouteFound, isUCS, filesContent)}
        </Flex>
      </PageTemplate>
    );
}
