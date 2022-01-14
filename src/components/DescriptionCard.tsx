import React from "react";
import { Text } from "@chakra-ui/react";
type AppProps = {
  type: string;
};
export default function DescriptionCard(props: AppProps) {
  let description = "";
  switch (props.type) {
    case "ETH":
      description = "Convert your BTC to ETH";
      break;
    case "AAVE":
      description = "Earn interest on ETH using AAVE";
      break;
    case "WBTC":
      description = "Withdraw your wrapped BTC";
      break;
  }
  return <Text>{description}</Text>;
}
