import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import BitcoinWrap from "./BitcoinWrap";
import DefiShowcase from "./DefiShowcase";
import EthereumAddress from "./EthereumAddress";
import ProceedButton from "./ProceedButton";
import DefiSection from "./DefiSection";
import Header from "./Header";
import StatusModal from "./StatusModal";

import { useDispatch, useSelector } from "react-redux";
interface IState {
  btcAmount: {
    isValid: boolean;
    amount: number;
  };
  targetChoice: {
    isValid: boolean;
    choice: string;
  };
  ethAddress: {
    isValid: boolean;
    address: string;
  };
  modal: {
    status: string;
    flag: number;
    bitcoinHash: string;
    ethereumHash: string;
  };
  provider: any;
  signer: any;
}
export default function MainCard() {
  return (
    <>
      <Flex
        direction={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"50%"}
      >
        <Header></Header>
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
          {/* <Header></Header> */}
          <BitcoinWrap></BitcoinWrap>
          <Divider marginBottom={0.1}></Divider>
          {/* <DefiShowcase></DefiShowcase> */}
          <DefiSection></DefiSection>
          <EthereumAddress></EthereumAddress>
          <ProceedButton></ProceedButton>
        </Flex>
      </Flex>
      <StatusModal></StatusModal>
    </>
  );
}
