import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home(): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
    </Flex>
  );
}
