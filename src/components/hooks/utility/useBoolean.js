import React from 'react'
import { useBoolean , Text} from '@chakra-ui/react'

export default function UseBooleanCompo() {
  const [flag, setFlag] = useBoolean()

  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>
        Click me to toggle the boolean value
      </button>
      <Text>On HOVER</Text>
      <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
    </div>
    </>
  )
}
