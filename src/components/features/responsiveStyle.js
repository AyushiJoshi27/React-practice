import React from 'react'
import { Box, Divider, Text, Link, Image } from '@chakra-ui/react';

export default function ResponsiveStyleCompo() {
  return (
    <div>
      <Box
        height={{
          base: "100%", // 0-48em
          md: "50%", // 48em-80em,
          xl: "25%", // 80em+
        }}
        bg="teal.400"
        width={[
          "100%", // 0-30em
          "50%", // 30em-48em
          "25%", // 48em-62em
          "15%", // 62em+
        ]}
      />
      {/* responsive font size */}
      <Box fontSize={["sm", "md", "lg", "xl"]}>Font Size</Box>
      {/* responsive margin */}
      <Box mt={[2, 4, 6, 8]} width="full" height="24px" bg="tomato" />
      {/* responsive padding */}
      <Box bg="papayawhip" p={[2, 4, 6, 8]}>
        Padding
      </Box>
      <Box width={[1, 1 / 2, 1 / 4]} bg='grey' height='200px'/>
      <Divider />
      <Box p={4} display={{ md: "flex" }}>
  <Box flexShrink={0}>
    <Image
      borderRadius="lg"
      width={{ md: 40 }}
      src="https://bit.ly/2jYM25F"
      alt="Woman paying for a purchase"
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="sm"
      letterSpacing="wide"
      color="teal.600"
    >
      Marketing
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
    >
      Finding customers for your new business
    </Link>
    <Text mt={2} color="gray.500">
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </Text>
  </Box>
</Box>
    </div>
  )
}
