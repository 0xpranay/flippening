import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { ethers } from "ethers";

import { useDispatch } from "react-redux";
export default function EthereumAddress() {
  const [isValid, setisValid] = useState(false);
  const dispatch = useDispatch();
  function validateAddress(event: any) {
    let address = event.target.value;
    let isValid = ethers.utils.isAddress(address);
    setisValid(isValid);
    dispatch({
      type: "ethAddress",
      payload: {
        isValid: isValid,
        address: address,
      },
    });
  }
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      direction={"column"}
    >
      <InputGroup>
        <InputLeftAddon children="Enter your ETH address"></InputLeftAddon>
        <Input
          isInvalid={!isValid}
          focusBorderColor={isValid ? "green.300" : "red.300"}
          // errorBorderColor="red.300"
          onChange={validateAddress}
          textAlign={"center"}
          placeholder="0x123A4BCD..."
          variant={"outline"}
          outline={isValid ? "green" : "none"}
        ></Input>
        <InputRightElement
          display={isValid ? "inherit" : "none"}
          children={<CheckIcon w={5} h={5} color="green.500" />}
        />
      </InputGroup>
    </Flex>
  );
}
