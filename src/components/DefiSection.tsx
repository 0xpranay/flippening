import { Flex, Text } from "@chakra-ui/react";
import DefiShowcase from "./DefiShowcase";
import React from "react";

export default function DefiSection() {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      marginBottom={4}
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
      >
        Choose what to do on Ethereum
      </Text>
      <DefiShowcase></DefiShowcase>
    </Flex>
  );
}
