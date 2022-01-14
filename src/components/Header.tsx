import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={4}
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
        width={"50%"}
        color={"black"}
      >
        Flippening.money 🦇
      </Text>
      <Flex>
        <Button
          border={"2px solid orange"}
          color={"orange"}
          _hover={{
            background: "orange.300",
            color: "white",
          }}
          variant={"solid"}
        >
          Connect Metamask 🦊
        </Button>
      </Flex>
    </Flex>
  );
}
