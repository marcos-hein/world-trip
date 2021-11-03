import { Flex, Image, Text } from "@chakra-ui/react";

interface CategoryProps {
  icon: string;
  text: string;
}

export function Category({ icon, text }: CategoryProps): JSX.Element {
  return (
    <Flex direction="column" align="center">
      <Image src={`/icons/${icon}.svg`} />
      <Text mt="6" fontSize="2xl" fontWeight="medium" color="gray.600">
        {text}
      </Text>
    </Flex>
  );
}
