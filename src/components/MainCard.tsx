import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import BitcoinWrap from "./BitcoinWrap";
import DefiShowcase from "./DefiShowcase";
import EthereumAddress from "./EthereumAddress";
import ProceedButton from "./ProceedButton";
import DefiSection from "./DefiSection";
import Header from "./Header";
export default function MainCard() {
  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      border={"2px solid black"}
      borderRadius={"15px"}
      padding={[0, 10, 15, 20, 30]}
      boxShadow="xl"
    >
      <Header></Header>
      <BitcoinWrap></BitcoinWrap>
      <Divider marginBottom={0.1}></Divider>
      {/* <DefiShowcase></DefiShowcase> */}
      <DefiSection></DefiSection>
      <EthereumAddress></EthereumAddress>
      <ProceedButton></ProceedButton>
    </Flex>
  );
}
