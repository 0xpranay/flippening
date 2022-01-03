import React from "react";
type AppProps = {
  currency?: string;
};
export default function CurrencyComponent({ currency = "BTC" }: AppProps) {
  return <div></div>;
}
