import { Box, Flex, Image, Separator, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from "../../components/ui/drawer";
import { logo } from "../../assets";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Box bg="#1A0B2E" px={{ md: "120px", base: "10px" }}>
      {/* Desktop Navigation */}
      <Box display={{ md: "flex", base: "none" }} color="white" h="80px" alignItems="center" justifyContent="space-between">
        <Image src={logo} w={"50px"}  rounded={"50%"}/>
        <Flex alignItems="center" gap="50px">
          {["Home", "About", "Lab"].map((item) => (
            <Text key={item} transition='all .2s ease-in-out' fontWeight="900" fontSize="2xl" cursor="pointer" _hover={{ color: "#D53F8C" }}>
              {item}
            </Text>
          ))}
        </Flex>
      </Box>

      {/* Mobile Navigation */}
      <Box display={{ md: "none", base: "block" }}>
        <Flex alignItems="center" justifyContent="space-between" h="80px">
         <Image src={logo} w={"50px"} />
          <FaBarsStaggered size={30} onClick={() => setOpen(true)} cursor="pointer" />
        </Flex>
        <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle fontSize="xl" fontWeight="bold">
                <Image src={logo} w={"50px"} />
              </DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Separator />
              <Flex alignItems="start" gap="30px" flexDir="column" pt="20px">
                {["Home", "About", "Lab"].map((item) => (
                  <Text key={item} fontWeight="900" fontSize="2xl" cursor="pointer" _hover={{ color: "#D53F8C" }}>
                    {item}
                  </Text>
                ))}
              </Flex>
            </DrawerBody>
            <DrawerCloseTrigger mt="10px" cursor="pointer" _hover={{ color: "red" }} />
          </DrawerContent>
        </DrawerRoot>
      </Box>
    </Box>
  );
}
