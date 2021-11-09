import { Flex, Heading, Wrap } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface City {
  name: string;
  cityImage: string;
  country: string;
  flagUrl: string;
}
interface CitiesProps {
  cities: City[];
}

export function Cities({ cities }: CitiesProps): JSX.Element {
  return (
    <Flex direction="column" px="140px" mb="9">
      <Heading fontWeight="medium">Cidades +100</Heading>

      <Wrap spacing="12" mt="12">
        {cities.map(city => (
          <CityCard key={city.name} city={city} />
        ))}
      </Wrap>
    </Flex>
  );
}
