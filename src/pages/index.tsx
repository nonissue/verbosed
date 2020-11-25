import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Nav } from "../components";
import { Footer } from "../components/Footer";

const Index: React.FunctionComponent = () => (
  <Container height="100vh">
    <Nav />
    <Hero />
    <Main></Main>

    {/* <Footer></Footer> */}
  </Container>
);

export default Index;
