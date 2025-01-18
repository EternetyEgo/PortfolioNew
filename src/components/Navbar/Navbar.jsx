import { Box, Flex, Image, Separator, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from "../../components/ui/drawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Box bg="#1A0B2E" px={{ md: "120px", base: "10px" }}>
      {/* Desktop Navigation */}
      <Box display={{ md: "flex", base: "none" }} color="white" h="80px" alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="xl">
          Logo
        </Text>
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
          <Text fontWeight="bold" fontSize="xl">
            Logo
          </Text>
          <FaBarsStaggered size={30} onClick={() => setOpen(true)} cursor="pointer" />
        </Flex>
        <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle fontSize="xl" fontWeight="bold">
                Logo
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
