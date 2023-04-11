
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import { Home } from "./page/Home"
import { ChooseInput } from "./page/ChooseInput";
import theme from "./theme/theme";
import { UseFile } from "./page/UseFile";
import { UseMaps } from "./page/UseMaps";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseInput />} />
        <Route path="/choose/file" element={<UseFile />} />
        <Route path="/choose/maps" element={<UseMaps />} />
      </Routes>
    </Router>
  </ChakraProvider>
)
