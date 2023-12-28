import { SimpleGrid, Divider, Box } from '@chakra-ui/react'

export default function SimpleGridComponent() {
  return (
    <>
      <b>USAGE</b>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
      <Divider />
      <b>responsive</b>
      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
      <b>auto-reponsive grid</b>
      <SimpleGrid minChildWidth='120px' spacing='40px'>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
      <b>Changing the spacing for columns and rows</b>
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
    </>
  )
}