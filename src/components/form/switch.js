import React from 'react';
import { Switch, FormControl, FormLabel, SimpleGrid, } from '@chakra-ui/react';

export default function SwitchCompo() {
  return (
    <div>
<FormControl display='flex' alignItems='center'>
  <FormLabel htmlFor='email-alerts' mb='0'>
    Enable email alerts?
  </FormLabel>
  <Switch id='email-alerts' />
</FormControl>
<p>state depending behaviour</p>
<FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
  <FormLabel htmlFor='isChecked'>isChecked:</FormLabel>
  <Switch id='isChecked' isChecked />

  <FormLabel htmlFor='isDisabled'>isDisabled:</FormLabel>
  <Switch id='isDisabled' isDisabled defaultChecked />

  <FormLabel htmlFor='isFocusable'>isFocusable:</FormLabel>
  <Switch id='isFocusable' isFocusable isDisabled />

  <FormLabel htmlFor='isInvalid'>isInvalid:</FormLabel>
  <Switch id='isInvalid' isInvalid />

  <FormLabel htmlFor='isReadOnly'>isReadOnly:</FormLabel>
  <Switch id='isReadOnly' isReadOnly />

  <FormLabel htmlFor='isRequired'>isRequired:</FormLabel>
  <Switch id='isRequired' isRequired />
</FormControl>
    </div >
  )
}
