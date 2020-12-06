// import { Hero } from "../components/Hero";
import { Flex, Heading } from "@chakra-ui/react";
import { Container, Nav } from "src/components";

const Custom404: React.FunctionComponent = () => (
  <Container height="100vh">
    <Nav />
    <Flex height="100vh" alignItems="center">
      <Heading size="4xl">404</Heading>
    </Flex>
  </Container>
);

export default Custom404;
