import { useFilePicker } from "use-file-picker";
import { Box, Text, Flex, Button } from "@chakra-ui/react"
import { PageTemplate } from '../layout/Template';
import { GraphMatrix } from "../class/GraphMatrix";
import { Path } from "../class/Path";

function getUCSPath(fileStr: string): string {
  let graph: GraphMatrix = new GraphMatrix(fileStr);
  let searchPath: Path = graph.searchUCS(7,4);
  return `Polyline:<br>${graph.getPolylineName(searchPath)}</br><br>Weight:<br>${searchPath.getPrio()}</br>`;
}

// const grapher = ({polyline: Path}) => {

// }
export const UseFile = () =>  {
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
        <Text color = 'white'>
          {filesContent.length == 1 ? getUCSPath(filesContent[0].content) : ""}
        </Text>
        </Box>
      </Flex>
    </PageTemplate>
    );
}
// filesContent[0].content.split()