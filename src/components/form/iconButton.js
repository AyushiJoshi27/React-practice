import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { CheckIcon, SearchIcon, EmailIcon } from '@chakra-ui/icons'

export default function IconButtonCompo() {
  return (
    <div>
      <IconButton colorScheme='red' aria-label='Search database' size='lg' icon={<SearchIcon />} />
      <p>Variant</p>
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Send email'
        icon={<EmailIcon />}
      />
      <p>Perfectly round</p>
      <IconButton
        isRound={true}
        variant='solid'
        colorScheme='teal'
        aria-label='Done'
        fontSize='20px'
        icon={<CheckIcon />}
      />
    </div>
  )
}
