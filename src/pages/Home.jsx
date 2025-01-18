import { Box, Theme } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Hero } from '../components/Hero/Hero'

export default function Home() {
  return (
    <Box>
        {/* <Navbar /> */}
        <Theme appearance='light' >
          <Box>
            <Hero />
          </Box>
        </Theme>
    </Box>
  )
}
