import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { ContinentsProps } from "../../pages";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function Carousel({ continents }: ContinentsProps): JSX.Element {
  return (
    <Flex w="100%" h={{ base: "250px", md: "450px" }} maxWidth={1240} mx="auto" mb="40px">
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              bgImage={continent.imgUrl}
              bgSize="cover"
            >
              <Flex direction="column" align="center">
                <Link href={`/continent/${continent.id}`}>
                  <Heading
                    fontSize={{ base: "2xl", md: "5xl" }}
                    color="gray.100"
                    _hover={{ filter: "brightness(0.9)", cursor: "pointer" }}
                  >
                    {continent.name}
                  </Heading>
                </Link>
                <Text
                  mt={{ base: "12px", md: "16px" }}
                  fontSize={{ base: "sm", md: "2xl" }}
                  fontWeight="700"
                  color="gray.300"
                >
                  O continente mais antigo
                </Text>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
