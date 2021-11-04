import { Flex, Heading, Wrap } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

export function Cities(): JSX.Element {
  return (
    <Flex direction="column" px="140px" mb="9">
      <Heading fontWeight="medium">Cidades +100</Heading>

      <Wrap spacing="12" mt="12">
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </Wrap>
    </Flex>
  );
}
