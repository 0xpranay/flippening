import { Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
export default function Header() {
  const [connected, setConnected] = useState(false);
  const dispatch = useDispatch();
  let provider, signer;

  async function connectWallet(event: any) {
    console.log("Connect called");
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      if ((await signer.getChainId()) != 42) {
        alert("Switch to Kovan testnet");
        return;
      }
      //signer.signMessage("Enjoy the flippening");
      dispatch({
        type: "wallet",
        payload: { provider: provider, signer: signer },
      });
      setConnected(true);
    } else {
      alert("Please install Metamask");
    }
  }

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
          onClick={connectWallet}
        >
          Connect Metamask 🦊
        </Button>
      </Flex>
    </Flex>
  );
}
