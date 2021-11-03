import { Flex, Image } from "@chakra-ui/react";

export function Header(): JSX.Element {
  return (
    <Flex as="header" w="100%" h="24" mx="auto" px="6" align="center" justifyContent="center">
      <Image
        w={["81px", "184px"]}
        src="/logo.svg"
        alt="Um avião voando sobre o nome da marca world trip"
      />
    </Flex>
  );
}
