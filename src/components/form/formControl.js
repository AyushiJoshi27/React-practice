import React from 'react'
import {
  Select, 
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input, Radio, RadioGroup, HStack, NumberInputField, NumberInput, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper
} from '@chakra-ui/react'

export default function FormControlCompo() {
  const [input, setInput] = React.useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === '';

  return (
    <div>
      <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<p>Radio/checkbox</p>
<FormControl as='fieldset'>
  <FormLabel as='legend'>
    Favorite Naruto Character
  </FormLabel>
  <RadioGroup defaultValue='Itachi'>
    <HStack spacing='24px'>
      <Radio value='Sasuke'>Sasuke</Radio>
      <Radio value='Nagato'>Nagato</Radio>
      <Radio value='Itachi'>Itachi</Radio>
      <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
    </HStack>
  </RadioGroup>
  <FormHelperText>Select only if you're a fan.</FormHelperText>
</FormControl>
<p>Error msg</p>
<FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    <p>Select example</p>
    <FormControl>
  <FormLabel>Country</FormLabel>
  <Select placeholder='Select country'>
    <option>United Arab Emirates</option>
    <option>Nigeria</option>
  </Select>
</FormControl>
<p>Number input</p>
<FormControl>
  <FormLabel>Amount</FormLabel>
  <NumberInput max={50} min={10}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl>
    </div>
  )
}
