import { HStack } from "@chakra-ui/react";
import { Info } from "./Info";

export function ContinentInfos(): JSX.Element {
  return (
    <HStack spacing="10">
      <Info number={50} text="países" />
      <Info number={60} text="línguas" />
      <Info number={27} text="cidades +100" />
    </HStack>
  );
}
