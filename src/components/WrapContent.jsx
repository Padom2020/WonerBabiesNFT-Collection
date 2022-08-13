import { Container } from "@chakra-ui/react";
import React from "react";

function WrapContent({ children, ...rest }) {
  return (
    <Container {...rest} maxWidth="container.lg">
      {children}
    </Container>
  );
}

export default WrapContent;
