import React from 'react';
import { useRadio, Box, chakra, Image } from '@chakra-ui/react';

export default function UseRadioCompo() {
  const CustomRadio = (props) => {
    const { image, ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Box
          {...getRadioProps()}
          bg={state.isChecked ? 'green.200' : 'transparent'}
          w={12}
          p={1}
          rounded='full'
        >
          <Image src={image} rounded='full' {...getLabelProps()} />
        </Box>
      </chakra.label>
    )
  }

  return (
    <div>
      <CustomRadio image={'https://randomuser.me/api/portraits/men/86.jpg'} />
    </div>
  )
}
