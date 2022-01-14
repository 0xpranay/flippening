import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CurrencyLogo from "./CurrencyLogo";
import BitcoinInteract from "./BitcoinInteract";
export default function BitcoinWrap() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
      <Text fontSize={"5xl"} color={"orange"} fontWeight="extrabold">
        Enter the BTC amount to{" "}
        <Text
          fontSize={"5xl"}
          color={"#687FE6"}
          display={"inline"}
          fontWeight="extrabold"
        >
          Flip.
        </Text>
      </Text>
      <BitcoinInteract></BitcoinInteract>
    </Flex>
  );
}
