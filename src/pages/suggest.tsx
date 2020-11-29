import { Box } from "@chakra-ui/react";
import { Container, Nav, Heading } from "src/components";

const Suggest: React.FunctionComponent = () => {
  return (
    <Container>
      <Nav />

      <Box
        px={["6", "6", "4", "4"]}
        width="100vw"
        maxW="min(65ch, 100%)"
        m="auto"
      >
        <Heading
          title="Suggest"
          // letterSpacing="0.05em"
          // textTransform="uppercase"
        />

        <Box justifyItems="left" width="100%">
          Functionality to accept ideas coming soon.
        </Box>
      </Box>
    </Container>
  );
};

export default Suggest;
