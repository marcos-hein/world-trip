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
      h="500px"
      px="36"
      pb="14"
      bgImage={`url(${url})`}
      bgSize="cover"
    >
      <Heading size="2xl" fontWeight="medium" color="gray.100">
        {name}
      </Heading>
    </Flex>
  );
}
