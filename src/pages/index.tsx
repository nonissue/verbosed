import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Nav } from "../components";

const Index: React.FunctionComponent = () => (
  <Container height="100vh">
    <Nav />
    <Hero />
  </Container>
);

export default Index;
