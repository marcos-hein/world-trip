import { Flex, Text } from "@chakra-ui/react";

interface InfoProps {
  number: number;
  text: string;
}

export function Info({ number, text }: InfoProps): JSX.Element {
  return (
    <Flex direction="column" align="center">
      <Text fontSize="48px" fontWeight="medium" color="yellow.500">
        {number}
      </Text>
      <Text fontSize="xl" fontWeight="medium" color="gray.600">
        {text}
      </Text>
    </Flex>
  );
}
