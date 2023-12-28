import React from 'react';
import { Show, Hide, Box, Text } from '@chakra-ui/react'

export default function ShowHideCompo() {
  return (
    <div>
      <Text>breakpoint</Text>
      <Show breakpoint='(max-width: 400px)'>
        <Box>This text appears only on screens 400px and smaller.</Box>
      </Show>
      <Text>Above/below</Text>
      <>
        <Show above='sm'>
          <Box>This text appears at the "sm" value screen width or greater.</Box>
        </Show>
        <Hide below='md'>
          <Box>This text hides at the "md" value screen width and smaller.</Box>
        </Hide>
      </>
    </div>
  )
}
