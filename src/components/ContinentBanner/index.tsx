import { Flex, Heading } from "@chakra-ui/react";

export function ContinentBanner(): JSX.Element {
  return (
    <Flex
      w="100%"
      direction="column-reverse"
      h="500px"
      px="36"
      pb="14"
      bgImage="url('/continents/europe.jpg')"
      bgSize="cover"
    >
      <Heading size="2xl" fontWeight="medium" color="gray.100">
        Europa
      </Heading>
    </Flex>
  );
}
