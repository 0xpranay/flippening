import { Flex, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import DefiCard from "./DefiCard";
import RadioCard from "./RadioCard";
export default function DefiShowcase() {
  const options = ["WBTC", "ETH", "AAVE"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "target",
    defaultValue: "ETH",
    onChange: console.log,
  });
  const group = getRootProps();

  //   return (
  //     <Flex
  //       justifyContent={"space-around"}
  //       alignItems={"center"}
  //       width={"100%"}
  //       marginTop={4}
  //     >
  //       <DefiCard type="WBTC"></DefiCard>
  //       <DefiCard type="ETH"></DefiCard>
  //       <DefiCard type="AAVE"></DefiCard>
  //     </Flex>
  //   );

  return (
    <Flex
      {...group}
      direction={["column", "row"]}
      width={"100%"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      marginTop={4}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            <DefiCard type={value}></DefiCard>
          </RadioCard>
        );
      })}
    </Flex>
  );
}
