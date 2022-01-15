import { Flex } from "@chakra-ui/react";
import MainCard from "./MainCard";
export default function LanderBox() {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={[0, 5, 6, 7, 8, 10]}
      background={"linear-gradient(to right, #FFFFFF, #ECE9E6)"}
      height={"100%"}
      // maxHeight={"100%"}
    >
      <MainCard></MainCard>
    </Flex>
  );
}
