import { Flex, useRadioGroup } from "@chakra-ui/react";
import { useEffect } from "react";
import DefiCard from "./DefiCard";
import RadioCard from "./RadioCard";
import { useDispatch } from "react-redux";
export default function DefiShowcase() {
  const options = ["WBTC", "ETH", "AAVE"];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "targetChoice",
      payload: { isValid: true, choice: "ETH" },
    });
  }, []);

  function updateChoice(newChoice: string) {
    dispatch({
      type: "targetChoice",
      payload: { isValid: true, choice: newChoice },
    });
  }
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "target",
    defaultValue: "ETH",
    onChange: updateChoice,
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
