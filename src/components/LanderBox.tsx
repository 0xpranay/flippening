import { Flex } from "@chakra-ui/react";
import CurrencyComponent from "./CurrencyComponent";
export default function LanderBox() {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={[0, 5, 6, 7, 10]}
      height={"100vh"}
      maxHeight={"100%"}
    >
      <CurrencyComponent type="BTC" />
      <CurrencyComponent type="ETH" />
    </Flex>
  );
}
