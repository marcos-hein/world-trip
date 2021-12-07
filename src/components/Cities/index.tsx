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
    <Flex direction="column" mb="9" px={{ base: 4, lg: 36 }}>
      <Heading fontWeight="medium" fontSize={{ base: "24px", lg: "36px" }}>
        Cidades +100
      </Heading>
      <Wrap spacing={{ base: 4, lg: 12 }} mt="12" justify={{ base: "center", lg: "inherit" }}>
        {cities.map(city => (
          <CityCard key={city.name} city={city} />
        ))}
      </Wrap>
    </Flex>
  );
}
