import { Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Header() {
  const [connected, setConnected] = useState(false);
  return (
    <Flex
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={[2, 4, 6, 8, 10, 12]}
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
        width={"50%"}
        color={"pink.400"}
      >
        Flippening.money 🦇
      </Text>
      <Flex>
        <Button
          border={"2px solid orange"}
          color={"orange"}
          _hover={{
            background: "orange.300",
            color: "white",
          }}
          variant={"solid"}
          display={connected ? "none" : "visible"}
        >
          Connect Metamask 🦊
        </Button>
      </Flex>
    </Flex>
  );
}
