import { Box, Image, Span, Text } from "@chakra-ui/react";
import React from "react";
import { me } from "../../assets";
import { FaFacebook } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <Box w="100%" h="100%" pb={"30px"}>
      <Box className="hero" display={"flex"} alignItems={"center"} gap={3} justifyContent={{ base: "space-between", lg: "flex-start" }} w={{ lg: "70%", base: "90%" }} mx={"auto"} pt={"60px"}>
        <Box w={{ base: "400px", sm: "385px" }} h={{ base: "400px", sm: "430px" }} className="wrapper">
          <Image w={{ base: "200px", sm: "260px" }} h={{ base: "200px", sm: "260px" }} className="foreground" src={me} />
        </Box>

        <Box>
          <Text color={"#fff"}>
            Hello! I Am <Span color={"#7127BA"}>Ibrahim Memon</Span>
          </Text>

          <Box w={"100%"} pt={{ base: "20px", lg: "100px" }}>
            <Text color={"#fff"}>A Designer who</Text>
            <Text color={"#fff"} fontSize={{ base: "30px", lg: "50px", sm: "40px" }} w={{ sm: "385px", base: "90%" }}>
              Judges a book by its <Span color={"#7127BA"}>cover</Span>...
            </Text>
            <Text color={"#fff"} pt={"0px"} fontSize={"12px"}>
              Because if the cover does not impress you what else can?
            </Text>
          </Box>
        </Box>
      </Box>

      <Box gap={{ base: 2, md: 0 }} display={"flex"} alignItems={{ base: "center", md: "flex-start" }} flexDirection={"column"} pt={{ base: "30px", lg: "60px" }} pl={{ lg: "50px", base: 0 }} mx="auto" color={"#fff"} w={{ lg: "70%", base: "90%" }}>
        <Text fontSize={{ base: "30px", lg: "50px", sm: "30px" }}>
          I'm a <ReactTyped strings={["Software Engineer.", "Mobile Developer."]} backSpeed={60} loop typeSpeed={80} />{" "}
        </Text>
        <Box display={"flex"} w={"100%"} alignItems={{lg:"center", base: 'flex-start'}}>
          Currently, I'm a Software Engineer at
          <Span display={"flex"} cursor={"pointer"} color={"blue"}>
          <FaFacebook cursor={"pointer"} color="blue" />
            Facebook
          </Span>
          .
        </Box>

        <Text textAlign={{ base: "center", md: "left" }} w={{ lg: "620px", base: "90%" }} pt={{ base: "10px", lg: "60px" }}>
          A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
        </Text>
      </Box>
    </Box>
  );
};
