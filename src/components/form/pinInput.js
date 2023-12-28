import React from 'react'
import { PinInput, PinInputField, HStack } from '@chakra-ui/react'

export default function PinInputCompo() {
  return (
    <div>
      <HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<p>Password</p>
<HStack>
  <PinInput type='alphanumeric' mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<p>Auto-fill and copy/paste</p>
<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
    </div>
  )
}
