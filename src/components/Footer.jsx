import { Box, Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box w={"100%"} h={"100vh"} pt={"50px"} pos="relative" display='flex' alignItems='center' justifyContent={'center'}>
      <Flex flexDir="column" w={{ base: "90%", lg: "70%" }} mx={"auto"} zIndex="99" className="rgbbackground">
        <Heading fontSize="4xl" mb={8}>
          Get in Touch
        </Heading>

        <Text fontSize="lg" mb={6}>
          I'm always excited to connect with like-minded professionals, discuss ideas, and collaborate on meaningful projects. Whether you're interested in working together or simply want to chat, feel free to reach out!
        </Text>

        <Text fontSize="md" mb={4}>
          Contact me directly via email or through the form below. I'll get back to you as soon as possible.
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
