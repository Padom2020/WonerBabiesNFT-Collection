import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <ChakraProvider>
        <Header />
        <Main />
        <Footer />
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default App;
