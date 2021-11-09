import { HStack } from "@chakra-ui/react";
import { Info } from "./Info";

interface ContinentInfosProps {
  numberOfCountries: number;
  languages: number;
  numberOfCities: number;
}

export function ContinentInfos({
  numberOfCities,
  languages,
  numberOfCountries,
}: ContinentInfosProps): JSX.Element {
  return (
    <HStack spacing="10">
      <Info number={numberOfCities} text="países" />
      <Info number={languages} text="línguas" />
      <Info number={numberOfCities} text="cidades +100" />
    </HStack>
  );
}
