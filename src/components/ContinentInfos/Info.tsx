import { Flex, Text } from "@chakra-ui/react";

interface InfoProps {
  number: number;
  text: string;
}

export function Info({ number, text }: InfoProps): JSX.Element {
  return (
    <Flex direction="column" align="center">
      <Text fontSize={{ base: "24px", lg: "48px" }} fontWeight="medium" color="yellow.500">
        {number}
      </Text>
      <Text fontSize={{ base: "18px", lg: "20px" }} fontWeight="medium" color="gray.600">
        {text}
      </Text>
    </Flex>
  );
}
