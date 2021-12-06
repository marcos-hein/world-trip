import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  name: string;
  url: string;
}

export function ContinentBanner({ name, url }: ContinentBannerProps): JSX.Element {
  return (
    <Flex
      w="100%"
      direction="column-reverse"
      h={{ base: "135px", md: "500px" }}
      px={{ base: "4", md: "24", lg: "36" }}
      pb="14"
      bgImage={`url(${url})`}
      bgSize="cover"
      bgPosition="center"
    >
      <Heading
        size="2xl"
        fontWeight="medium"
        fontSize={{ base: "20px", md: "36px" }}
        color="gray.100"
      >
        {name}
      </Heading>
    </Flex>
  );
}
