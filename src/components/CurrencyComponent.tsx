import React from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import CurrencyLogo from "./CurrencyLogo";
import BitcoinInteract from "./BitcoinInteract";
type AppProps = {
  type?: string;
};
const BTC = {
  border: "3px solid orange",
  type: "BTC",
};
const ETH = {
  border: "3px solid blue",
  type: "ETH",
};
export default function CurrencyComponent({ type = "BTC" }: AppProps) {
  const currency = type == "BTC" ? BTC : ETH;
  return (
    <Box
      w={"50%"}
      border={currency.border}
      borderRadius={25}
      p={[0, 5, 6, 7, 10]}
      marginBottom={"10"}
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CurrencyLogo type={currency.type} />
      </Flex>
    </Box>
  );
}
