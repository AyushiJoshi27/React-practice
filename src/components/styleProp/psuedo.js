import React from 'react'
import { Button, Box, Text } from '@chakra-ui/react';

export default function PseudoPropCompo() {
  return (
    <div>
      {/* :hover style */}
      <Button
        colorScheme="teal"
        _hover={{
          background: "red",
          color: "teal.500",
        }}
      >
        Hover me
      </Button>
      {/* apply :hover over parent element */}
      <Box
        role="group"
      >
        <Box
          _hover={{ fontWeight: 'semibold' }}
          _groupHover={{ color: 'grey' }}
        >Box
        </Box>
      </Box>
      <Text>::before pseudo element</Text>
      <Box
        _before={{ content: '"🙂"', display: 'inline-block', mr: '5px' }}
      >
        A pseudo element
      </Box>

    </div>
  )
}
