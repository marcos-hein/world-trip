import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Categories } from "../components/Categories";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";

export default function Home(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Categories />

      <Divider />

      <Heading mx="auto" my="52px" fontWeight="medium" textAlign="center">
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>

      <Carousel />
    </Flex>
  );
}
