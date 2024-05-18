import { Flex } from "@chakra-ui/react";
import { Triangle } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Flex height='100vh' width='100vw' justifyContent='center' alignItems='center'>
      <Triangle
        visible={true}
        height='100'
        width='100'
        color='teal'
        ariaLabel='triangle-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </Flex>
  );
};
