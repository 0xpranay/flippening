import React from "react";
import { Box, Image } from "@chakra-ui/react";

type AppProps = {
  type: string;
  variant?: string;
};
const BTC = {
  src: "./images/bitcoin.svg",
};
const ETH = {
  src: "./images/ethereum.svg",
};
const AAVE = {
  src: "./images/aave.svg",
};
const WBTC = {
  src: "./images/wbtc.svg",
};
export default function CurrencyLogo({ type, variant }: AppProps) {
  let currency = BTC;
  const boxSize = variant == "Primary" ? "200px" : "100px";
  switch (type) {
    case "BTC":
      currency = BTC;
      break;
    case "ETH":
      currency = ETH;
      break;
    case "AAVE":
      currency = AAVE;
      break;
    case "WBTC":
      currency = WBTC;
      break;
  }
  return (
    <Box mb={2}>
      <Image src={currency.src} boxSize={boxSize} objectFit={"cover"}></Image>
    </Box>
  );
}
