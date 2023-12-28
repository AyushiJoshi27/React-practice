import React from 'react';
import { Button, Box, Fade, Text, ScaleFade, Slide, SlideFade, Collapse, useDisclosure } from '@chakra-ui/react';
import { LoremIpsum } from 'react-lorem-ipsum';

export default function TransitionCompo() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div>
      <Button onClick={onToggle}>Click Me</Button>
      {/* <Text>Fade transition</Text>
      <Fade in={isOpen}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          Fade
        </Box>
      </Fade> */}
      {/* <Text>ScaleFade transition</Text>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          Fade
        </Box>
      </ScaleFade>   */}
      {/* <Text>Slide transition</Text>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          <Lorem count={2} />
        </Box>
      </Slide> */}
      {/* <Text>Slide fade transition</Text>
      <SlideFade in={isOpen} offsetY='20px'>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          <LoremIpsum count={1} />
        </Box>
      </SlideFade> */}
      <Text>Collapse</Text>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          <LoremIpsum count={1} />
        </Box>
      </Collapse>
    </div>
  )
}
