import React from "react";
import { Flex, useRadio, useRadioGroup } from "@chakra-ui/react";
import CurrencyLogo from "./CurrencyLogo";
import DescriptionCard from "./DescriptionCard";
import "focus-visible/dist/focus-visible";

export default function DefiCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  return (
    <Flex
      direction={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      width={"100%"}
      height={"10rem"}
      padding={4}
    >
      <CurrencyLogo type={props.type} variant="secondary"></CurrencyLogo>
      <DescriptionCard type={props.type}></DescriptionCard>
    </Flex>
  );
}
