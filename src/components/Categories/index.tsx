import { Flex } from "@chakra-ui/react";
import { Category } from "./Category";

export function Categories(): JSX.Element {
  return (
    <Flex
      width="100%"
      flexWrap="wrap"
      justifyContent="space-around"
      my={["9", "20"]}
      px={{ base: "5", md: "36" }}
    >
      <Category icon="cocktail" text="vida noturna" />
      <Category icon="surf" text="praia" />
      <Category icon="building" text="moderno" />
      <Category icon="museum" text="clássico" />
      <Category icon="earth" text="e mais..." />
    </Flex>
  );
}
