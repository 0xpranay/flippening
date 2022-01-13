import { useState } from "react";
import {
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  useClipboard,
  Button,
  Tooltip,
} from "@chakra-ui/react";
export default function BitcoinInteract() {
  // Import the store and fetch the txn hash.
  const { hasCopied, onCopy } = useClipboard("Dummy");
  const [amount, setAmount] = useState(0.01);

  function handleChangeAmount(event: any) {
    setAmount(event.target.value);
  }

  function setBitcoinValue() {
    // Code to handle when user confirms BTC amount
    alert("Confirmed user amount");
  }
  return (
    <Flex
      direction={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <InputGroup mb={2}>
        <InputLeftElement
          pointerEvents="none"
          color="orange.400"
          fontSize="1.2em"
          children="₿"
        />

        <Input
          placeholder="Enter bitcoin amount"
          focusBorderColor="orange.400"
          variant={"outline"}
          width={"70%"}
          value={amount}
          onChange={handleChangeAmount}
        ></Input>

        <Button
          width={"30%"}
          minW={"30%"}
          _hover={{
            bgColor: "orange.400",
            color: "white",
          }}
          variant={"outline"}
          borderColor={"orange.300"}
          fontWeight={"normal"}
          onClick={setBitcoinValue}
        >
          Deposit
        </Button>
      </InputGroup>
      <Input
        value={"Txn Hash"}
        isReadOnly
        placeholder="Null"
        onClick={onCopy}
        textAlign={"center"}
      ></Input>
    </Flex>
  );
}
