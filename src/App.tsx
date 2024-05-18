import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import { BaseRouter } from "./router/BaseRouter";
import { Toaster } from "sonner";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Toaster position='top-right' richColors />
      <RouterProvider router={BaseRouter} />
    </ChakraProvider>
  );
}

export default App;
