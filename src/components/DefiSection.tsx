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
      <Text fontSize="5xl" fontWeight="extrabold" color="pink.400">
        Choose what to do on{" "}
        <Text fontSize={"5xl"} color="#608DE2" display={"inline"}>
          Ethereum
        </Text>
      </Text>
      <DefiShowcase></DefiShowcase>
    </Flex>
  );
}
