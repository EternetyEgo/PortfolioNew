import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { cr, pr } from "../../assets";

const Project = () => {
  return (
    <Box w={"100%"} h={"100vh"} bg={"#11071F"} pt={"50px"}>
      <Box w={{ base: "90%", lg: "70%" }} mx={"auto"}>
        <Box display={"flex"} justifyContent={"space-between"} flexDir={{base: "column", xl: "row"}} alignItems={'center'}>
        <Box display={"flex"} flexDir={"column"} gap={2}>
          <Text
            fontSize={{ base: "14px", sm: "16px" }}
            fontWeight={"600"}
            color={"#9857D3"}
          >
            Featured Project
          </Text>
          <Text
            fontSize={{ base: "25px", sm: "30px", md: "34px" }}
            fontWeight={"600"}
            color={"#fff"}
          >
            Example Project
          </Text>
          <Box backdropFilter="blur(100px)"
  bg="rgba(255, 255, 255, 0.5)" rounded={"12px"} className="" w={{ base: "100%", lg: "550px", xl: "600px", '2xl': "670px" }} h={"100%"} p={4}>
            <Text>
              Featured Project Example Project A web app for visualizing
              personalized Spotify data. View your top artists, top tracks,
              recently played tracks, and detailed audio information about each
              track. Create and save new playlists of recommended tracks based
              on your existing playlists and more.
            </Text>
          </Box>

          <Box display={"flex"} pt={{lg: "50px", base: '10px'}} alignItems={"flex-end"} gap={2}>
            <Image src={cr} />
            <Image src={cr} />
          </Box>
        </Box>
        <Box>
            <Image objectFit={"cover"} src={pr} />
        </Box>
        </Box>





        <Box pt={{lg:  "100px", base: "50px"}} display={"flex"} justifyContent={"space-between"} flexDir={{base: "column-reverse", xl: "row"}} alignItems={'center'}>

        <Box>
            <Image objectFit={"cover"} src={pr} />
        </Box>

        <Box display={"flex"} flexDir={"column"} gap={2} alignItems={"flex-end"}>
          <Text
            fontSize={{ base: "14px", sm: "16px" }}
            fontWeight={"600"}
            color={"#9857D3"}
          >
            Featured Project
          </Text>
          <Text
            fontSize={{ base: "25px", sm: "30px", md: "34px" }}
            fontWeight={"600"}
            color={"#fff"}
          >
            Example Project
          </Text>
          <Box backdropFilter="blur(100px)"
  bg="rgba(255, 255, 255, 0.5)" rounded={"12px"} className="" w={{ base: "100%", lg: "550px", xl: "600px", '2xl': "670px" }} h={"100%"} p={4}>
            <Text>
              Featured Project Example Project A web app for visualizing
              personalized Spotify data. View your top artists, top tracks,
              recently played tracks, and detailed audio information about each
              track. Create and save new playlists of recommended tracks based
              on your existing playlists and more.
            </Text>
          </Box>

          <Box display={"flex"} pt={{lg: "50px", base: '10px'}} alignItems={"flex-end"} gap={2}>
            <Image src={cr} />
            <Image src={cr} />
          </Box>
        </Box>
        
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
