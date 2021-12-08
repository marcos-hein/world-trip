import { Flex, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Categories } from "../components/Categories";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import api from "../services/api";

export interface ContinentsProps {
  continents: {
    id: string;
    name: string;
    imgUrl: string;
  }[];
}

export default function Home({ continents }: ContinentsProps): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Categories />

      <Divider />

      <Heading
        mx="auto"
        my={{ base: "24px", md: "52px" }}
        fontWeight="medium"
        textAlign="center"
        fontSize={["xl", "3xl"]}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>

      <Carousel continents={continents} />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api("continents");
  const continents = res.data.map(c => {
    return {
      id: c.id,
      name: c.name,
      imgUrl: c.bannerUrl,
    };
  });
  return {
    props: { continents },
  };
};
