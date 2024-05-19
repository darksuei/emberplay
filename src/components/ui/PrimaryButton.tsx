import { Button } from "@chakra-ui/react";
import { PrimaryButtonProps } from "./types";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, className, onClick }) => {
  return (
    <Button
      variant='outline'
      colorScheme='teal'
      className={className}
      rightIcon={<ArrowForwardIcon />}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
