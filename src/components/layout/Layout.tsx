import { Box } from "@chakra-ui/react";
import { Header } from "./components";
import { LayoutProps } from "./types";
import { Footer } from "./components";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className={`relative min-h-screen w-full bg-white dark:bg-primaryBlack dark:text-white`}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
