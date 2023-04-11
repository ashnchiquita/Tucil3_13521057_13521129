import { GraphMatrix } from "./GraphMatrix";
import { Path } from "./Path";

// path relatif thd main
let graph: GraphMatrix = new GraphMatrix("../../config/test.txt");
console.log(graph.toString());
let searchPath: Path = graph.searchUCS(7,4);
console.log(`Polyline:\n${graph.getPolylineName(searchPath)}\nWeight:\n${searchPath.getPrio()}`);
