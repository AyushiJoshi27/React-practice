import React from 'react'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  HStack,
  Divider,
  Avatar
} from '@chakra-ui/react'
import { AddIcon, SettingsIcon } from '@chakra-ui/icons'

export default function TagCompo() {
  return (
    <div>
      <b>Simple Tag</b>
      <Tag>Sample Tag</Tag>
      <HStack spacing={4}>
  {['sm', 'md', 'lg'].map((size) => (
    <Tag size={size} key={size} variant='solid' colorScheme='teal'>
      Teal
    </Tag>
  ))}
</HStack>
      <b>With left icon</b>
      <HStack spacing={4}>
  {['sm', 'md', 'lg'].map((size) => (
    <Tag size={size} key={size} variant='subtle' colorScheme='cyan'>
      <TagLeftIcon boxSize='12px' as={AddIcon} />
      <TagLabel>Cyan</TagLabel>
    </Tag>
  ))}
</HStack>
<Divider />
<b>With RIght icon</b>
<HStack spacing={4}>
  {['sm', 'md', 'lg'].map((size) => (
    <Tag size={size} key={size} variant='outline' colorScheme='blue'>
      <TagLabel>Blue</TagLabel>
      <TagRightIcon as={SettingsIcon} />
    </Tag>
  ))}
</HStack>
<b>Custom element</b>
<Tag size='lg' colorScheme='red' borderRadius='full'>
  <Avatar
    src='https://bit.ly/sage-adebayo'
    size='xs'
    name='Segun Adebayo'
    ml={-1}
    mr={2}
  />
  <TagLabel>Segun</TagLabel>
</Tag>
    </div>
  )
}
