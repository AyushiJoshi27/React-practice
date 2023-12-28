import React from 'react';
import { Textarea, Text } from '@chakra-ui/react';

export default function TextareaCompo() {
  let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  return (
    <div>
      <Textarea placeholder='Here is a sample placeholder' />
      <p>Controlled textarea</p>
      <Text mb='8px'>Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </div>
  )
};
