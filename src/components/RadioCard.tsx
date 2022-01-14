import React from "react";
import { Box, useRadio, keyframes } from "@chakra-ui/react";

export default function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" width={"33%"} margin={"2"} _focus={{ _focus: "none" }}>
      <input {...input} />
      <Box
        {...checkbox}
        border={"1px solid gray"}
        borderRadius={"25px"}
        cursor="pointer"
        _checked={{
          backgroundColor: "#D9AFD9",
          backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
          overflow: "hidden",
          borderRadius: "25px",
          border: "none",
        }}
        _focus={{ _focus: "none" }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
