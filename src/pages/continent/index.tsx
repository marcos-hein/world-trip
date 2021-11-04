import { Flex, Text, Stack } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInfos } from "../../components/ContinentInfos";
import { Header } from "../../components/Header";

export default function Continent(): JSX.Element {
  return (
    <>
      <Header />
      <Stack spacing="20">
        <ContinentBanner />

        <Flex align="center" justifyContent="space-between" px="140px">
          <Text maxWidth={600} fontSize="24px" align="justify">
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península
            ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de
            águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <ContinentInfos />
        </Flex>
      </Stack>
    </>
  );
}
