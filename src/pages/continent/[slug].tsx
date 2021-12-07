import { Flex, Text, Stack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
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
      <Stack spacing={{ base: 6, lg: 20 }} mb="9">
        <ContinentBanner name={name} url={bannerUrl} />

        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justifyContent="space-between"
          px={{ base: 4, lg: 36 }}
        >
          <Text
            maxWidth={600}
            fontSize={{ base: "14px", lg: "24px" }}
            align="justify"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            mb={{ base: 4, lg: 0 }}
          >
            {info.bio}
          </Text>
          <ContinentInfos
            numberOfCountries={info.numberOfCountries}
            languages={info.languages}
            numberOfCities={info.numberOfCities}
          />
        </Flex>

        <Cities cities={cities} />
      </Stack>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "europa" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const res = await api(`continents/${slug}`);
  return {
    props: res.data,
  };
};
