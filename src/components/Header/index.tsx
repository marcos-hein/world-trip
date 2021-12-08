import { Flex, Image, Icon, Button, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FiChevronLeft } from "react-icons/fi";

export function Header(): JSX.Element {
  const router = useRouter();
  const isContinentPage = router.pathname.includes("continent") ?? true;

  return (
    <Flex
      as="header"
      w="100%"
      h={{ base: "12", md: "24" }}
      mx="auto"
      px="6"
      align="center"
      justifyContent="center"
    >
      {isContinentPage && (
        <Flex w="100%" pl={{ base: "16px", lg: "140px" }} position="absolute">
          <Tooltip
            label="Voltar"
            fontSize="md"
            bg="gray.100"
            color="gray.600"
            border="1px"
            borderColor="yellow.500"
          >
            <Button size="sm" variant="link" onClick={() => router.push("/")}>
              <Icon
                as={FiChevronLeft}
                color="gray.600"
                w={{ base: "5", lg: "7" }}
                h={{ base: "5", lg: "7" }}
              />
            </Button>
          </Tooltip>
        </Flex>
      )}
      <Image
        w={{ base: "81px", md: "184px" }}
        h={{ base: "20px", md: "45px" }}
        src="/logo.svg"
        alt="Um avião voando sobre o nome da marca world trip"
      />
    </Flex>
  );
}
