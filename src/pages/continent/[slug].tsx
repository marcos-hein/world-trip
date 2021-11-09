import { Flex, Text, Stack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Cities } from "../../components/Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInfos } from "../../components/ContinentInfos";
import { Header } from "../../components/Header";

import api from "../../services/api";

interface ContinentProps {
  name: string;
  bannerUrl: string;
  info: {
    bio: string;
    numberOfCountries: number;
    languages: number;
    numberOfCities: number;
  };
  cities: {
    name: string;
    cityImage: string;
    country: string;
    flagUrl: string;
  }[];
}

export default function Continent({ name, bannerUrl, info, cities }: ContinentProps): JSX.Element {
  return (
    <>
      <Header />
      <Stack spacing="20" mb="9">
        <ContinentBanner name={name} url={bannerUrl} />

        <Flex align="center" justifyContent="space-between" px="140px">
          <Text
            maxWidth={600}
            fontSize="24px"
            align="justify"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            {info.bio}
          </Text>
          <ContinentInfos
            numberOfCountries={info.numberOfCountries}
            languages={info.languages}
            numberOfCities={info.numberOfCities}
          />
        </Flex>

        <Flex>
          <Cities cities={cities} />
        </Flex>
      </Stack>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const { slug } = query;
  const res = await api(`continents/${slug}`);
  return {
    props: res.data,
  };
};
