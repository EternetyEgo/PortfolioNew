import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box px={{ md: "120px", base: "20px" }} py="50px" className="rgbbackground">
      <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={20}>
        Contact
      </Heading>

      <Text fontSize={{ base: "sm", md: "md" }} mb={6}>
        I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Or have a project in mind? Let's connect.
      </Text>

      <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
        ibrhaimmemon930@gmail.com
      </Text>

      <Flex gap="25px" mb={6}>
        <FaInstagram  cursor={"pointer"} size={35} />
        <FaTelegram cursor={"pointer"} size={35} />
        <FaGithub cursor={"pointer"} size={35} />
      </Flex>
    </Box>
  );
}
