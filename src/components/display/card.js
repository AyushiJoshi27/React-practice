import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text, Button, Heading, Stack, SimpleGrid, Image, Avatar, Flex, Kbd, Box, StackDivider, Divider, ButtonGroup } from '@chakra-ui/react'

export default function CardCompo() {
  return (
    <div>
      <b>Kbd
      <span>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </span>  
      </b>
      <Divider />
      <b>Card Divider</b>
      <Card align={'center'}>
        <CardHeader>
          <Heading size='md'>Client Report</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Summary
              </Heading>
              <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Analysis
              </Heading>
              <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <b>Card with Image</b>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <b>Horizontal Card</b>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>The perfect latte</Heading>

            <Text py='2'>
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <b>Advanced Composition</b>
      <Card maxW='md'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
            {/* <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              // icon={<BsThreeDotsVertical />}
            /> */}
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the speed
            of design. I wanted the developer to be just as excited as the designer to
            create a screen.
          </Text>
        </CardBody>
        <Image
          objectFit='cover'
          src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Chakra UI'
        />

        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button flex='1' variant='ghost'>
            Like
          </Button>
          <Button flex='1' variant='ghost'>
            Comment
          </Button>
          <Button flex='1' variant='ghost'>
            Share
          </Button>
        </CardFooter>
      </Card>
      <b><SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid></b>
      <b>variant</b>
      <Stack spacing='4'>
        {['elevated', 'outline', 'filled', 'unstyled'].map((variant) => (
          <Card key={variant} variant={variant}>
            <CardHeader>
              <Heading size='md'> {variant}</Heading>
            </CardHeader>
            <CardBody>
              <Text>variant = {variant}</Text>
            </CardBody>
          </Card>
        ))}
      </Stack>
      <b>Sizes</b>
      <Stack spacing='4'>
        {['sm', 'md', 'lg'].map((size) => (
          <Card key={size} size={size}>
            <CardHeader>
              <Heading size='md'> {size}</Heading>
            </CardHeader>
            <CardBody>
              <Text>size = {size}</Text>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </div>
  )
}
