import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CategoryProps {
  icon: string;
  text: string;
}

export function Category({ icon, text }: CategoryProps): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      direction={{ base: "row", lg: "column" }}
      align="center"
      justify="center"
      mx={{ base: "6px" }}
    >
      {isWideVersion ? (
        <Image src={`/icons/${icon}.svg`} />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="medium" color="gray.600">
        {text}
      </Text>
    </Flex>
  );
}
