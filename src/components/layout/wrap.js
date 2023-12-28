import { Wrap, Center, Divider, WrapItem } from '@chakra-ui/react'

export default function WrapComponent() {
  return (
    <>
      <b>USAGE</b>
      <Wrap>
        <WrapItem>
          <Center w='180px' h='80px' bg='red.200'>
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='green.200'>
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='tomato'>
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='blue.200'>
            Box 4
          </Center>
        </WrapItem>
      </Wrap>
      <Divider />
      <b>Changing the spacing</b>
      <Wrap spacing='30px'>
        <WrapItem>
          <Center w='180px' h='80px' bg='red.200'>
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='green.200'>
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='tomato'>
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='blue.200'>
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='blackAlpha.500'>
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      <Divider />
      <b>Changing the alignment</b>
      <Wrap spacing='30px' align='center'>
        <WrapItem>
          <Center w='180px' h='80px' bg='red.200'>
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='40px' bg='green.200'>
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='120px' h='80px' bg='tomato'>
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='40px' bg='blue.200'>
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='blackAlpha.500'>
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      <Divider />
      <b>Justify prop</b>
      <Wrap spacing='30px' justify='center'>
        <WrapItem>
          <Center w='180px' h='80px' bg='red.200'>
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='green.200'>
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='120px' h='80px' bg='tomato'>
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='blue.200'>
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='80px' bg='blackAlpha.500'>
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
    </>
  )
}