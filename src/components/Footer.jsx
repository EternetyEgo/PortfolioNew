import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box w={"100%"} h={"100%"} pt={"50px"} pos="relative">
      <Flex flexDir="column" w={{ base: "90%", lg: "70%" }} mx={"auto"} zIndex="99" className="rgbbackground">
        <Heading fontSize="4xl" mb={28}>
          Contact
        </Heading>

        <Text fontSize="lg" mb={6}>
          I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Or have a project in mind? Let's connect.
        </Text>

        <Text fontSize="md" mb={4}>
          ibrhaimmemon930@gmail.com
        </Text>

      <Flex gap="25px" mb={6}>
        <FaInstagram  className="icon" cursor={"pointer"} size={35} />
        <FaTelegram className="icon" cursor={"pointer"} size={35} />
        <FaGithub className="icon" cursor={"pointer"} size={35} />
      </Flex>
      </Flex>
    </Box>
  );
}
