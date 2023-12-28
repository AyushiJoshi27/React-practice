import { Stack, HStack, Divider, VStack, Box, StackDivider, Heading, Text } from '@chakra-ui/react'

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

export default function StackComponent() {
  return (
    <>
      <b>USAGE</b>
      <HStack spacing='24px'>
        <Box w='40px' h='40px' bg='yellow.200'>
          1
        </Box>
        <Box w='40px' h='40px' bg='tomato'>
          2
        </Box>
        <Box w='40px' h='40px' bg='pink.100'>
          3
        </Box>
      </HStack>
      <Divider />
      <b>Responsive direction</b>
      <Stack direction={['column', 'row']} spacing='24px'>
        <Box w='40px' h='40px' bg='yellow.200'>
          1
        </Box>
        <Box w='40px' h='40px' bg='tomato'>
          2
        </Box>
        <Box w='40px' h='40px' bg='pink.100'>
          3
        </Box>
      </Stack>
      <Divider />
      <br />
      <Stack direction={['row', 'column']} spacing='24px'>
        <Box w='40px' h='40px' bg='yellow.200'>
          1
        </Box>
        <Box w='40px' h='40px' bg='tomato'>
          2
        </Box>
        <Box w='40px' h='40px' bg='pink.100'>
          3
        </Box>
      </Stack>
      <b>Stack Dividers</b>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        <Box h='40px' bg='yellow.200'>
          1
        </Box>
        <Box h='40px' bg='tomato'>
          2
        </Box>
        <Box h='40px' bg='pink.100'>
          3
        </Box>
      </VStack>
      <b>Feature Cards with Stack Component</b>
      <Stack spacing={8} direction='row'>
        <Feature
          title='Plan Money'
          desc='The future can be even brighter but a goal without a plan is just a wish'
        />
        <Feature
          title='Save Money'
          desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
        />
        </Stack>
        <b>Feature Cards with HStack Component</b>
        <HStack spacing={8}>
      <Feature
        title='Plan Money'
        desc='The future can be even brighter but a goal without a plan is just a wish'
      />
      <Feature
        title='Save Money'
        desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
      />
    </HStack>
      </>
      )
}