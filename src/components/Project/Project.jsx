import { Box, Button, Flex, Image, Separator, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { cr, pr } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <Box id="project" w={"100%"} h={"100%"} bg={"#11071F"} py={"50px"}>
      <Flex flexDir="column" gap="60px" w={{ base: "90%", lg: "70%" }} mx={"auto"}>
        <Separator variant="dashed" colorScheme="gray" borderColor="gray.500" borderWidth="2px" />
        <Box data-aos="fade-up" display={"flex"} justifyContent={"space-between"} flexDir={{ base: "column", xl: "row" }} alignItems={"center"}>
          <Box display={"flex"} flexDir={"column"} gap={2}>
            <Text fontSize={{ base: "14px", sm: "16px" }} fontWeight={"600"} color={"#9857D3"}>
              Flutter
            </Text>
            <Text fontSize={{ base: "25px", sm: "30px", md: "34px" }} fontWeight={"600"} color={"#fff"}>
              Online Dokon
            </Text>
            <Box backdropFilter="blur(100px)" bg="rgba(255, 255, 255, 0.5)" rounded={"12px"} className="" w={{ base: "100%", lg: "550px", xl: "600px", "2xl": "670px" }} h={"100%"} p={4}>
              <Text>Featured Project Example Project A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</Text>
            </Box>

            <Box display={"flex"} pt={{ lg: "50px", base: "10px" }} alignItems={"flex-end"} gap={2}>
              <Button mt="20px" size="md" bg="white" color="#3B0963" fontWeight="bold" borderRadius="10px" _hover={{ bg: "gray.200" }}>
                Yuklab olish
              </Button>
            </Box>
          </Box>
          <Box>
            <Image objectFit={"cover"} src={pr} />
          </Box>
        </Box>
        <Separator variant="dashed" colorScheme="gray" borderColor="gray.500" borderWidth="2px" />
        <Box data-aos="fade-up" display={"flex"} justifyContent={"space-between"} flexDir={{ base: "column", xl: "row" }} alignItems={"center"}>
          <Box display={"flex"} flexDir={"column"} gap={2}>
            <Text fontSize={{ base: "14px", sm: "16px" }} fontWeight={"600"} color={"#9857D3"}>
              Flutter
            </Text>
            <Text fontSize={{ base: "25px", sm: "30px", md: "34px" }} fontWeight={"600"} color={"#fff"}>
              Online Dokon
            </Text>
            <Box backdropFilter="blur(100px)" bg="rgba(255, 255, 255, 0.5)" rounded={"12px"} className="" w={{ base: "100%", lg: "550px", xl: "600px", "2xl": "670px" }} h={"100%"} p={4}>
              <Text>Featured Project Example Project A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</Text>
            </Box>

            <Box display={"flex"} pt={{ lg: "50px", base: "10px" }} alignItems={"flex-end"} gap={2}>
              <Button mt="20px" size="md" bg="white" color="#3B0963" fontWeight="bold" borderRadius="10px" _hover={{ bg: "gray.200" }}>
                Yuklab olish
              </Button>
            </Box>
          </Box>
          <Box>
            <Image objectFit={"cover"} src={pr} />
          </Box>
        </Box>
        <Separator variant="dashed" colorScheme="gray" borderColor="gray.500" borderWidth="2px" />
        <Box data-aos="fade-up" display={"flex"} justifyContent={"space-between"} flexDir={{ base: "column", xl: "row" }} alignItems={"center"}>
          <Box display={"flex"} flexDir={"column"} gap={2}>
            <Text fontSize={{ base: "14px", sm: "16px" }} fontWeight={"600"} color={"#9857D3"}>
              Flutter
            </Text>
            <Text fontSize={{ base: "25px", sm: "30px", md: "34px" }} fontWeight={"600"} color={"#fff"}>
              Online Dokon
            </Text>
            <Box backdropFilter="blur(100px)" bg="rgba(255, 255, 255, 0.5)" rounded={"12px"} className="" w={{ base: "100%", lg: "550px", xl: "600px", "2xl": "670px" }} h={"100%"} p={4}>
              <Text>Featured Project Example Project A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</Text>
            </Box>

            <Box display={"flex"} pt={{ lg: "50px", base: "10px" }} alignItems={"flex-end"} gap={2}>
              <Button mt="20px" size="md" bg="white" color="#3B0963" fontWeight="bold" borderRadius="10px" _hover={{ bg: "gray.200" }}>
                Yuklab olish
              </Button>
            </Box>
          </Box>
          <Box>
            <Image objectFit={"cover"} src={pr} />
          </Box>
        </Box>
        <Separator variant="dashed" colorScheme="gray" borderColor="gray.500" borderWidth="2px" />
        <Box data-aos="fade-up" display={"flex"} justifyContent={"space-between"} flexDir={{ base: "column", xl: "row" }} alignItems={"center"}>
          <Box display={"flex"} flexDir={"column"} gap={2}>
            <Text fontSize={{ base: "14px", sm: "16px" }} fontWeight={"600"} color={"#9857D3"}>
              Flutter
            </Text>
            <Text fontSize={{ base: "25px", sm: "30px", md: "34px" }} fontWeight={"600"} color={"#fff"}>
              Online Dokon
            </Text>
            <Box backdropFilter="blur(100px)" bg="rgba(255, 255, 255, 0.5)" rounded={"12px"} className="" w={{ base: "100%", lg: "550px", xl: "600px", "2xl": "670px" }} h={"100%"} p={4}>
              <Text>Featured Project Example Project A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</Text>
            </Box>

            <Box display={"flex"} pt={{ lg: "50px", base: "10px" }} alignItems={"flex-end"} gap={2}>
              <Button mt="20px" size="md" bg="white" color="#3B0963" fontWeight="bold" borderRadius="10px" _hover={{ bg: "gray.200" }}>
                Yuklab olish
              </Button>
            </Box>
          </Box>
          <Box>
            <Image objectFit={"cover"} src={pr} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Project;
