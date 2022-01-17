import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  useClipboard,
  Icon,
} from "@chakra-ui/react";

import { FaBitcoin } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function BitcoinInteract() {
  const [amount, setAmount] = useState(0.01);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "btcAmount",
      payload: { isValid: true, amount: 0.01 },
    });
  }, []);
  function handleChangeAmount(event: any) {
    setAmount(event.target.value);
    dispatch({
      type: "btcAmount",
      payload: { isValid: true, amount: event.target.value },
    });
  }

  return (
    <Flex
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"30%"}
    >
      <InputGroup
        mb={2}
        outline={"3px solid orange"}
        borderRadius={"20px"}
        overflow={"hidden"}
        width={"100%"}
        mr={2}
      >
        <Input
          type={"number"}
          placeholder="0.0"
          focusBorderColor="none"
          variant={"filled"}
          width={"100%"}
          value={amount}
          height={"100px"}
          onChange={handleChangeAmount}
          fontSize={"4rem"}
          color={"orange.400"}
          textAlign={"left"}
        ></Input>

        <InputLeftElement
          pointerEvents="none"
          color={"orange.400"}
          children={"₿"}
          alignItems={"center"}
          fontSize={"xx-large"}
        />
      </InputGroup>
    </Flex>
  );
}
