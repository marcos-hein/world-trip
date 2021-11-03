import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";

export function Banner(): JSX.Element {
  return (
    <Flex
      w="100%"
      align="center"
      justifyContent="space-between"
      h="335px"
      px="36"
      bgImage="url('/banner.jpg')"
      bgSize="cover"
    >
      <Box maxWidth={524}>
        <Heading fontWeight="medium" color="gray.100">
          5 Continentes,
          <br /> infinitas possibilidades.
        </Heading>
        <Text mt="5" fontSize="lg" color="gray.300">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Box>
      <Image
        w={["417px"]}
        pt="24"
        src="/airplane.svg"
        alt="Um avião voando sobre o nome da marca world trip"
      />
    </Flex>
  );
}
