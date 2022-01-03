import React from "react";
import { VStack } from "@chakra-ui/react";
import CurrencyComponent from "./CurrencyComponent";
export default function LanderBox() {
  return (
    <VStack>
      <CurrencyComponent />
      <CurrencyComponent />
    </VStack>
  );
}
