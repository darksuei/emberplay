import { Flex } from "@chakra-ui/react";
import { ErrorBoundaryProps } from "./types";
import NotFound from "../../assets/images/not_found.webp";

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ errorMessage }) => {
  return (
    <Flex
      height='100vh'
      width='100vw'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      color='#4338CA'
    >
      <img src={NotFound} alt='Not found image' width='600px' />
      <h1 className='text-4xl font-bold mb-2'>{errorMessage ? "500" : "404"}</h1>
      <h2>{errorMessage ? errorMessage : "Nothing to see here :("}</h2>
    </Flex>
  );
};
