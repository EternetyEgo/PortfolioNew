import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { f, f2, f3, f4, tick } from '../../assets'

const Service = () => {
  return (
    <Box w={"100%"} h={"100%"} bg={"#11071F"} pb={"50px"} pt={"100px"}>
        <Box w={{base: "90%", lg: "70%"}} mx={"auto"}>
            <Heading className='text' fontSize={{base: "40px", sm: "45px", md: "58px"}} fontWeight={"900"} textAlign={"center"}>SERVICES</Heading>

            <Box flexWrap={"wrap"} display={"flex"} justifyContent={"center"} gap={4} pt={"40px"}>
                <Box className='br' display={"flex"} alignItems={"center"} justifyContent={"center"} w={"180px"} h={"40px"} borderRadius={"30px"} border={"1px solid gray"} gap={2}>
                    <Image src={tick} pt={"5px"} />
                    <Text>Design System</Text>
                </Box>
                <Box className='br' display={"flex"} alignItems={"center"} justifyContent={"center"} w={"180px"} h={"40px"} borderRadius={"30px"} border={"1px solid gray"} gap={2}>
                    <Image src={tick} pt={"5px"} />
                    <Text>Product</Text>
                </Box>
                <Box className='br' display={"flex"} alignItems={"center"} justifyContent={"center"} w={"180px"} h={"40px"} borderRadius={"30px"} border={"1px solid gray"} gap={2}>
                    <Image src={tick} pt={"5px"} />
                    <Text>Website</Text>
                </Box>
                <Box className='br' display={"flex"} alignItems={"center"} justifyContent={"center"} w={"180px"} h={"40px"} borderRadius={"30px"} border={"1px solid gray"} gap={2}>
                    <Image src={tick} pt={"5px"} />
                    <Text>Branding</Text>
                </Box>
                <Box className='br' display={"flex"} alignItems={"center"} justifyContent={"center"} w={"180px"} h={"40px"} borderRadius={"30px"} border={"1px solid gray"} gap={2}>
                    <Image src={tick} pt={"5px"} />
                    <Text>Logo Design</Text>
                </Box>
            </Box>

            <Heading textAlign={"center"} fontSize={"20px"} fontWeight={"600"} pt={"40px"}>Product, Website or Brand Design, I've got you covered!</Heading>
            <Text textAlign={"center"} color={"#5A5964"}>Let's elevate your vision and achieve your design goals together!</Text>

            <Box  display={"flex"} alignItems={"center"} flexDir={"column"} gap={4} justifyContent={"center"} pt={"50px"}>
                <Box px={{base: "10px", sm: 0}} w={{base: "100%", sm: "460px"}} h={"120px"} gap={4} bg={"#292835"} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded={"10px"}>
                    <Image src={f4} />
                    <Box display={"flex"} flexDir={"column"} alignItems={"flex-start"}>
                        <Text fontSize={"16px"} fontWeight={"600"} color={'#fff'}>Design System Expert</Text>
                        <Text fontSize={"14px"} color={"#5A5964"}>Creation / Edition or Audit of your DS</Text>
                    </Box>
                </Box>
                <Box px={{base: "10px", sm: 0}} w={{base: "100%", sm: "460px"}} h={"120px"} gap={4} bg={"#292835"} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded={"10px"}>
                    <Image src={f2} />
                    <Box display={"flex"} flexDir={"column"} alignItems={"flex-start"}>
                        <Text fontSize={"16px"} fontWeight={"600"} color={'#fff'}>UX & UI Design</Text>
                        <Text fontSize={"14px"} color={"#5A5964"}>Creation / Edition or Audit of your DS</Text>
                    </Box>
                </Box>
                <Box px={{base: "10px", sm: 0}} w={{base: "100%", sm: "460px"}} h={"120px"} gap={4} bg={"#292835"} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded={"10px"}>
                    <Image src={f3} />
                    <Box display={"flex"} flexDir={"column"} alignItems={"flex-start"}>
                        <Text fontSize={"16px"} fontWeight={"600"} color={'#fff'}>Brand Design</Text>
                        <Text fontSize={"14px"} color={"#5A5964"}>Creation / Edition or Audit of your DS</Text>
                    </Box>
                </Box>
                <Box px={{base: "10px", sm: 0}} w={{base: "100%", sm: "460px"}} h={"120px"} gap={4} bg={"#292835"} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded={"10px"}>
                    <Image src={f} />
                    <Box display={"flex"} flexDir={"column"} alignItems={"flex-start"}>
                        <Text fontSize={"16px"} fontWeight={"600"} color={'#fff'}>Brand Design</Text>
                        <Text fontSize={"14px"} color={"#5A5964"}>Creation / Edition or Audit of your DS</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Service