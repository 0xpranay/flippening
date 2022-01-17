import { useEffect } from "react";
import { Flex, Button } from "@chakra-ui/react";

import RenJS from "@renproject/ren";
import { Bitcoin, Ethereum } from "@renproject/chains";

import { useSelector } from "react-redux";
interface state {
  btcAmount: {
    isValid: boolean;
    amount: number;
  };
  targetChoice: {
    isValid: boolean;
    choice: string;
  };
  ethAddress: {
    isValid: boolean;
    address: string;
  };
  provider: any;
  signer: any;
}

export default function ProceedButton() {
  const state = useSelector((state: state) => state);
  const contractAddress = "0xd5bED1f0d9b4d4D473d49D414332F32dFd55FcBb";
  const renJS = new RenJS("testnet", { useV2TransactionFormat: true });

  useEffect(() => {
    console.log("Button Re render");
  });
  function getState() {
    console.log(state);
  }

  async function flippening() {
    console.log("Generating deposit address...");
    const amount = state.btcAmount.amount;
    const choice = state.targetChoice.choice;
    const address = state.ethAddress.address;
    const provider = state.provider;
    const signer = state.signer;
    console.log("Choice is " + choice);
    let contractFn = "";
    switch (choice) {
      case "WBTC":
        contractFn = "receiveWrappedBTC";
        break;
      case "ETH":
        contractFn = "receiveETH";
        break;
      case "AAVE":
        contractFn = "stakeOnAave";
        break;
    }
    const mint = await renJS.lockAndMint({
      asset: "BTC",
      from: Bitcoin(),
      to: Ethereum(provider).Contract({
        sendTo: contractAddress,
        contractFn: contractFn,
        contractParams: [
          {
            name: "_msg",
            type: "bytes",
            value: Buffer.from(`Depositing ${amount} BTC`),
          },
          {
            name: "recipient",
            type: "address",
            value: address,
          },
        ],
      }),
    });

    // Modify below code
    alert(`Deposit ${amount} BTC to ${mint.gatewayAddress}`);
    mint.on("deposit", async (deposit) => {
      // Details of the deposit are available from `deposit.depositDetails`.

      const hash = deposit.txHash();
      const depositLog = (msg: any) =>
        console.log(
          `BTC deposit: ${Bitcoin.utils.transactionExplorerLink(
            deposit.depositDetails.transaction,
            "testnet"
          )}\n
          RenVM Hash: ${hash}\n
          Status: ${deposit.status}\n
          ${msg}`
        );

      await deposit
        .confirmed()
        .on("target", (target) => depositLog(`0/${target} confirmations`))
        .on("confirmation", (confs, target) =>
          depositLog(`${confs}/${target} confirmations`)
        );

      await deposit
        .signed()
        // Print RenVM status - "pending", "confirming" or "done".
        .on("status", (status) => depositLog(`Status: ${status}`));

      await deposit
        .mint()
        // Print Ethereum transaction hash.
        .on("transactionHash", (txHash) =>
          console.log(`Ethereum transaction: ${String(txHash)}\nSubmitting...`)
        );

      console.log(`Deposited ${amount} BTC.`);
    });
  }
  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginTop={4}>
      <Button colorScheme={"blue"} onClick={flippening}>
        Proceed 🚀
      </Button>
    </Flex>
  );
}
