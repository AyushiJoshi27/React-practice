import React from 'react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

export default function CheckboxCompo() {
  return (
    <div>
      <Checkbox defaultChecked>Checkbox</Checkbox>
      <b>Disabled</b>
      <Stack spacing={5} direction='row'>
        <Checkbox isDisabled>Checkbox</Checkbox>
        <Checkbox isDisabled defaultChecked>
          Checkbox
        </Checkbox>
      </Stack>
      <p>Custom color </p>
      <Stack spacing={5} direction='row'>
        <Checkbox colorScheme='red' defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox colorScheme='green' defaultChecked>
          Checkbox
        </Checkbox>
      </Stack>
      <p>Sizes</p>
      <Stack spacing={[1, 5]} direction={['column', 'row']}>
        <Checkbox size='sm' colorScheme='red'>
          Checkbox
        </Checkbox>
        <Checkbox size='md' colorScheme='green' defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox size='lg' colorScheme='orange' defaultChecked>
          Checkbox
        </Checkbox>
      </Stack>
      <p>Invlid</p>
      <Checkbox isInvalid>Checkbox</Checkbox>
      <p>Grouped</p>
      <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          <Checkbox value='naruto'>Naruto</Checkbox>
          <Checkbox value='sasuke'>Sasuke</Checkbox>
          <Checkbox value='kakashi'>Kakashi</Checkbox>
        </Stack>
      </CheckboxGroup>
    </div>
  )
}
