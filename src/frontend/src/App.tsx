
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Home } from "./page/Home"
import { ChooseInput } from "./page/ChooseInput";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseInput />} />
      </Routes>
    </Router>
  </ChakraProvider>
)
