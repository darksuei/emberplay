import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import { BaseRouter } from "./router/BaseRouter";
import { Toaster } from "sonner";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  // Send the user data to redux and a backend.

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ChakraProvider>
        <Toaster position='top-right' richColors />
        <RouterProvider router={BaseRouter} />
      </ChakraProvider>
    </Auth0Provider>
  );
}

export default App;
