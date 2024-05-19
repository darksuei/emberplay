import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Search = () => {
  const [query, setQuery] = useState("");

  // Filter items on the screen based on the query

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLocaleLowerCase());
  };

  return (
    <Box
      height='fit-content'
      width='fit-content'
      bg={"rgba(247, 247, 247, 0.75)"}
      top={0}
      left={0}
      zIndex={100}
      display={"flex"}
      justifyContent={"center"}
      className='wrapper-box'
      style={{ borderRadius: "32px" }}
    >
      <div>
        <InputGroup size='md' width='300px' position={"relative"} style={{ borderRadius: "32px" }}>
          <InputRightElement height={"100%"} pointerEvents='none'>
            <SearchIcon />
          </InputRightElement>
          <Input
            type='text'
            placeholder='Search'
            border={"1px solid #7E7E7E"}
            paddingBlock={"8px"}
            paddingInline={"16px"}
            height={"fit-content"}
            onChange={handleInputChange}
            width='300px'
            bg={"white"}
            style={{ borderRadius: "32px" }}
          />
        </InputGroup>
      </div>
    </Box>
  );
};
