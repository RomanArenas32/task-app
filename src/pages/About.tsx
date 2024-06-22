import { Box, Button, Slide, useDisclosure } from "@chakra-ui/react"


export const About = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>More...</Button>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum assumenda alias, esse reiciendis ducimus sunt illum eligendi ullam obcaecati qui aliquam? Fugit commodi illum velit illo quidem nisi! Voluptatum modi rem accusamus vitae facilis, enim tempora mollitia. Consequuntur eum deserunt ullam enim ex tempore est tempora suscipit! Adipisci, vero.
        </Box>
      </Slide>
    </>
  )
}