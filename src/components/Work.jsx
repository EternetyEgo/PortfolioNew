import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Work() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <Box mt='100px'>
      <Flex class data-aos="fade-up" flexWrap="wrap" alignItems="center" justifyContent="center" gap="30px" className="gradient" h="auto" px={{ md: "60px", base: "20px" }}>
        <Box width={{ md: "450px", base: "100%" }} bg="linear-gradient(135deg, #1A0B2E, #3B0963)" borderRadius="20px" color="white" boxShadow="lg" textAlign="start" overflow="hidden" position="relative">
          <Image width="100%" height="250px" objectFit="cover" src="https://marketplace.canva.com/EAFb6ulQkLM/2/0/1600w/canva-brand-agency-portfolio-website-in-white-black-sleek-monochrome-style-VPXYcBtq8h8.jpg" alt="Portfolio" />
          <Box p="20px">
            <Text fontSize="2xl" fontWeight="bold">
              CIB on the Mobile
            </Text>
            <Text fontSize="md" mt="10px" opacity="0.8">
              Take your client onboard seamlessly by our amazing tool of digital onboard process.
            </Text>
            <Button mt="20px" size="md" bg="white" color="#3B0963" fontWeight="bold" borderRadius="10px" _hover={{ bg: "gray.200" }}>
              LEARN MORE
            </Button>
          </Box>
        </Box>

        <Box width={{ md: "450px", base: "100%" }} bg="linear-gradient(135deg, #1A0B2E, #3B0963)" borderRadius="20px" color="white" boxShadow="lg" textAlign="start" overflow="hidden" position="relative">
          <Image width="100%" height="250px" objectFit="cover" src="https://marketplace.canva.com/EAFb6ulQkLM/2/0/1600w/canva-brand-agency-portfolio-website-in-white-black-sleek-monochrome-style-VPXYcBtq8h8.jpg" alt="Portfolio" />
          <Box p="20px">
            <Text fontSize="2xl" fontWeight="bold">
              CIB on the Mobile
            </Text>
            <Text fontSize="md" mt="10px" opacity="0.8">
              Take your client onboard seamlessly by our amazing tool of digital onboard process.
            </Text>
            <Button mt="20px" size="md" bg="white" color="#3B0963" fontWeight="bold" borderRadius="10px" _hover={{ bg: "gray.200" }}>
              LEARN MORE
            </Button>
          </Box>
        </Box>

        <Box width={{ md: "450px", base: "100%" }} bg="linear-gradient(135deg, #1A0B2E, #3B0963)" borderRadius="20px" color="white" boxShadow="lg" textAlign="start" overflow="hidden" position="relative">
          <Image width="100%" height="250px" objectFit="cover" src="https://marketplace.canva.com/EAFb6ulQkLM/2/0/1600w/canva-brand-agency-portfolio-website-in-white-black-sleek-monochrome-style-VPXYcBtq8h8.jpg" alt="Portfolio" />
          <Box p="20px">
            <Text fontSize="2xl" fontWeight="bold">
              CIB on the Mobile
            </Text>
            <Text fontSize="md" mt="10px" opacity="0.8">
              Take your client onboard seamlessly by our amazing tool of digital onboard process.
            </Text>
            <Button mt="20px" size="md" bg="white" color="#3B0963" fontWeight="bold" borderRadius="10px" _hover={{ bg: "gray.200" }}>
              LEARN MORE
            </Button>
          </Box>
        </Box>

        <Box width={{ md: "450px", base: "100%" }} bg="linear-gradient(135deg, #1A0B2E, #3B0963)" borderRadius="20px" color="white" boxShadow="lg" textAlign="start" overflow="hidden" position="relative">
          <Image width="100%" height="250px" objectFit="cover" src="https://marketplace.canva.com/EAFb6ulQkLM/2/0/1600w/canva-brand-agency-portfolio-website-in-white-black-sleek-monochrome-style-VPXYcBtq8h8.jpg" alt="Portfolio" />
          <Box p="20px">
            <Text fontSize="2xl" fontWeight="bold">
              CIB on the Mobile
            </Text>
            <Text fontSize="md" mt="10px" opacity="0.8">
              Take your client onboard seamlessly by our amazing tool of digital onboard process.
            </Text>
            <Button mt="20px" size="md" bg="white" color="#3B0963" fontWeight="bold" borderRadius="10px" _hover={{ bg: "gray.200" }}>
              LEARN MORE
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
