import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  useDisclosure,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Button,
} from "@chakra-ui/react";
import JSConfetti from "js-confetti";
import { useDispatch, useSelector } from "react-redux";
interface IState {
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
function throwConfetti() {
  const jsconfetti = new JSConfetti();
  jsconfetti.addConfetti({
    emojis: ["🌈", "🦄"],
    emojiSize: 80,
  });
}
export default function StatusModal() {
  const modalState = useSelector((state: IState) => {
    return state.modal;
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  if (modalState.flag == 4) throwConfetti();
  return (
    <Modal isOpen={modalState.open} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text align={"center"}>{modalState.status}</Text>
        </ModalHeader>
        <ModalBody>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <CircularProgress
              value={Number(modalState.flag) * 25}
              size={"200px"}
              color={
                modalState.flag == 1 || modalState.flag == 2
                  ? "orange.400"
                  : "#687FE6"
              }
              marginBottom={5}
            >
              <CircularProgressLabel>
                {Number(modalState.flag) * 25 + "%"}
              </CircularProgressLabel>
            </CircularProgress>
            <Button
              display={Number(modalState.flag) <= 1 ? "none" : "block"}
              variant={"outline"}
              colorScheme={"orange"}
              onClick={() => {
                window.open(modalState.bitcoinHash, "_blank");
              }}
              marginBottom={1}
            >
              View on BTC block explorer
            </Button>
            <Button
              display={Number(modalState.flag) == 4 ? "block" : "none"}
              colorScheme={"blue"}
              variant={"outline"}
              onClick={() => {
                window.open(modalState.ethereumHash, "_blank");
              }}
            >
              View on ETH block explorer
            </Button>

            <Button
              colorScheme={"blue"}
              onClick={() => {
                dispatch({
                  type: "modal",
                  payload: {
                    status: "",
                    flag: 0,
                    bitcoinHash: "",
                    ethereumHash: "",
                    open: false,
                  },
                });
              }}
              isDisabled={modalState.flag != 4}
              marginTop={5}
            >
              Close
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
