import { Flex, Box, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  city: {
    name: string;
    cityImage: string;
    country: string;
    flagUrl: string;
  };
}

export function CityCard({ city }: CityCardProps): JSX.Element {
  const { name, cityImage, country, flagUrl } = city;

  return (
    <Box bgColor="white" borderBottomRadius="4px">
      <Image w="256px" h="173px" borderTopRadius="4px" src={cityImage} objectFit="cover" />
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
            {name}
          </Text>
          <Text color="gray.400">{country}</Text>
        </Flex>
        <Image w="30px" h="30px" objectFit="cover" borderRadius="100%" src={flagUrl} />
      </Flex>
    </Box>
  );
}
