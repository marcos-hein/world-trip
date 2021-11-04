import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function Carousel(): JSX.Element {
  return (
    <Flex w="100%" h="450px" maxWidth={1240} mx="auto" mb="40px">
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgImage="/continents/europe.jpg"
            bgSize="cover"
          >
            <Link href="/continent/europe">
              <Flex direction="column" align="center">
                <Heading size="2xl" color="gray.100">
                  Europa
                </Heading>
                <Text mt="16px" fontSize="2xl" fontWeight="700" color="gray.300">
                  O continente mais antigo
                </Text>
              </Flex>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgImage="/continents/europe.jpg"
            bgSize="cover"
          >
            <Link href="/continent/europe">
              <Flex direction="column" align="center">
                <Heading size="2xl" color="gray.100">
                  Europa
                </Heading>
                <Text mt="16px" fontSize="2xl" fontWeight="700" color="gray.300">
                  O continente mais antigo
                </Text>
              </Flex>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
