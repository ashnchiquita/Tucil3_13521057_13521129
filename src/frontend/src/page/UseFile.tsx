import { useFilePicker } from "use-file-picker";
import { Box, Text, Flex, Button, Switch } from "@chakra-ui/react"
import { PageTemplate } from '../layout/Template';
import { GraphMatrix } from "../class/GraphMatrix";
import { Path } from "../class/Path";
import { DraggableMarker, center } from "./UseMaps";
import { MapContainer, TileLayer, Popup, Marker, Polyline } from "react-leaflet";
import { Node } from "../class/Node";
import { useState } from "react";

function getUCSPath(fileStr: string): string {
  let graph: GraphMatrix = new GraphMatrix(fileStr);
  let searchPath: Path = graph.searchUCS(7,4);
  return `Polyline:<br>${graph.getPolylineName(searchPath)}</br><br>Weight:<br>${searchPath.getPrio()}</br>`;
}

const arrayRange = (start: number = 0, stop: number, step: number = 1) =>
    Array.from(
    { length: (stop - start) / step },
    (value, index) => start + index * step
    );

const Blue = { color: 'blue' }
const Red = { color: 'red' }

function grapher (fileStr: string, isUCS: boolean = true) {
  let graph: GraphMatrix = new GraphMatrix(fileStr);
  let searchPath: Path = isUCS ? graph.searchUCS(0,3) : graph.searchAStar(0,7);
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
          {nodes[i].getName()}
        </Popup>
      </Marker>)}
      <Polyline pathOptions={Blue} positions={allpolylines}/>
      <Polyline pathOptions={Red} positions={polylineanswer}/>
  </MapContainer>);}

export const UseFile = () =>  {
  const [isUCS, setIsUCS] = useState(true);
    const [openFileSelector, { filesContent, loading }] = useFilePicker({
      accept: ".txt"
    });

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <PageTemplate title="Choose Input">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        position="relative"
      >

        <Box bg = 'white' borderRadius="20px">
          <Text fontSize="2xl" fontWeight="bold" color ="black" mx = '10' my = '1' >
          {filesContent.length == 1 ? filesContent[0].name : "belom upload"}
          </Text>
        </Box>
        <Box pt={10}>
        <Button
          onClick={() => openFileSelector()}
          background="#8669FA"
          borderRadius="50px"
          mt='2em'
          p='1.2em'
          lineHeight="92%"
          fontSize='1.5em'
          _hover={{
            transform: 'scale(1.1)'
          }}
          color = 'white'
        >
          Select File
        </Button>
        <label>AStar</label>
        <Switch
            alignSelf='center'
            onChange={() => setIsUCS(!isUCS)}
            checked={isUCS}
            >
          <label>UCS</label>
        </Switch>
        {filesContent.length == 1 ? grapher(filesContent[0].content, isUCS) : <></>}
        </Box>
      </Flex>
    </PageTemplate>
    );
}
