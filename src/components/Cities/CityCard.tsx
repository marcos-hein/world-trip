import { Flex, Box, Image, Text } from "@chakra-ui/react";

export function CityCard(): JSX.Element {
  return (
    <Box bgColor="white" borderBottomRadius="4px">
      <Image
        w="256px"
        h="173px"
        borderTopRadius="4px"
        src="/continents/europe.jpg"
        objectFit="cover"
      />
      <Flex
        border="1px"
        borderTop="none"
        borderColor="yellow.500"
        borderBottomRadius="4px"
        align="center"
        justifyContent="space-between"
        px="6"
        py="5"
      >
        <Flex direction="column" justifyContent="space-between">
          <Text fontSize="20px" fontWeight="medium">
            Londres
          </Text>
          <Text color="gray.400">Reino Unido</Text>
        </Flex>
        <Image src="/country.png" />
      </Flex>
    </Box>
  );
}
