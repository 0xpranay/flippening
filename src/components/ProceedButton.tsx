import { useEffect } from "react";
import { Flex, Button, useDisclosure, useToast, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import RenJS from "@renproject/ren";
import { Bitcoin, Ethereum } from "@renproject/chains";

import { useDispatch, useSelector } from "react-redux";
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
  modal: {
    status: string;
    flag: number;
    bitcoinHash: string;
    ethereumHash: string;
    open: boolean;
  };
  provider: any;
  signer: any;
}

export default function ProceedButton() {
  const state = useSelector((state: state) => state);
  const dispatch = useDispatch();
  const toast = useToast();
  const contractAddress = "0xf2b3B57EcF761f9e1e46f67402331f1EA1D06F12";
  const renJS = new RenJS("testnet", { useV2TransactionFormat: true });

  useEffect(() => {
    console.log("Button Re render");
  });
  function getState() {
    console.log(state);
  }

  async function flippening() {
    try {
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

      console.log(
        "Calling function " +
          contractFn +
          " at address " +
          contractAddress +
          " with user as " +
          address
      );
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
      dispatch({
        type: "modal",
        payload: {
          status: "Waiting for BTC Deposit",
          flag: 1,
          bitcoinHash: "",
          ethereumHash: "",
          open: true,
        },
      });
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
        const btcHash = Bitcoin.utils.transactionExplorerLink(
          deposit.depositDetails.transaction,
          "testnet"
        );
        dispatch({
          type: "modal",
          payload: {
            status: "Deposit Detected. Awaiting Confirmations",
            flag: 2,
            bitcoinHash: btcHash,
            ethereumHash: "",
            open: true,
          },
        });

        await deposit
          .confirmed()
          .on("target", (target) => depositLog(`0/${target} confirmations`))
          .on("confirmation", (confs, target) =>
            depositLog(`${confs}/${target} confirmations`)
          );

        await deposit
          .signed()
          // Print RenVM status - "pending", "confirming" or "done".
          .on("status", (status) => {
            depositLog(`Status: ${status}`);
            if (status == "confirming") {
              dispatch({
                type: "modal",
                payload: {
                  status: "Bridged to Ethereum. Welcome to DeFi",
                  flag: 3,
                  bitcoinHash: "",
                  ethereumHash: "",
                  open: true,
                },
              });
            }
          });

        await deposit
          .mint()
          // Print Ethereum transaction hash.
          .on("transactionHash", (txHash) => {
            console.log(
              `Ethereum transaction: ${String(txHash)}\nSubmitting...`
            );
            const ethHash = "https://rinkeby.etherscan.io/tx/" + txHash;
            dispatch({
              type: "modal",
              payload: {
                status: "Success! Check the tx for details.",
                flag: 4,
                bitcoinHash: "",
                ethereumHash: "https://rinkeby.etherscan.io/tx/" + txHash,
                open: true,
              },
            });
          });

        console.log(`Deposited ${amount} BTC.`);
      });
    } catch (error) {
      dispatch({
        type: "modal",
        payload: {
          status: "An Error Occured, see console.",
          flag: 0,
          bitcoinHash: "",
          ethereumHash: "",
        },
      });
      console.log(error);
      alert("An error occured. See console for details");
    }
  }
  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginTop={4}>
      <Button colorScheme={"blue"} onClick={flippening}>
        Proceed 🚀
      </Button>
    </Flex>
  );
}
