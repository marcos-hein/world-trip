import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export default function Home(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
    </Flex>
  );
}
