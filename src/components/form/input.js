import React from 'react';
import { Input, Stack, InputGroup, InputLeftAddon, InputRightAddon, InputLeftElement, InputRightElement, Button, Text } from '@chakra-ui/react';
import { PhoneIcon, CheckIcon } from '@chakra-ui/icons'

export default function InputCompo() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <div>
      <Input placeholder='Basic usage' />
      <p>Size prop</p>
      <Stack spacing={3}>
        <Input placeholder='extra small size' size='xs' />
        <Input placeholder='small size' size='sm' />
        <Input placeholder='medium size' size='md' />
        <Input placeholder='large size' size='lg' />
      </Stack>
      <p>Html size</p>
      <Input htmlSize={10} width='auto' />
      <p>Add ons</p>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon>
            +234
          </InputLeftAddon>
          <Input type='tel' placeholder='phone number' />
        </InputGroup>
        <InputGroup size='sm'>
          <InputLeftAddon>
            https://
          </InputLeftAddon>
          <Input placeholder='mysite' />
          <InputRightAddon>
            .com
          </InputRightAddon>
        </InputGroup>
      </Stack>
      <p>Add elements inside input</p>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <PhoneIcon color='gray.300' />
          </InputLeftElement>
          <Input type='tel' placeholder='Phone number' />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          >
            $
          </InputLeftElement>
          <Input placeholder='Enter amount' />
          <InputRightElement>
            <CheckIcon color='green.500' />
          </InputRightElement>
        </InputGroup>
      </Stack>
      <p>Password</p>
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <p>Controlled input</p>
    <Text mb='8px'>Value: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
      <p>Input Methods: Date and Time</p>
      <Input
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
    </div>
  )
}
