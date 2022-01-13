import React from "react";
import { Box, Image } from "@chakra-ui/react";

type AppProps = {
  type: string;
};
const BTC = {
  src: "./images/bitcoin.svg",
};
const ETH = {
  src: "./images/ethereum.svg",
};
export default function CurrencyLogo({ type }: AppProps) {
  const currency = type == "BTC" ? BTC : ETH;
  return (
    <Box mb={2}>
      <Image src={currency.src} boxSize={"150px"} objectFit={"cover"}></Image>
    </Box>
  );
}
