import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import swal from 'sweetalert'
import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      message
    }


    await fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data)
    })
    .then((response) => {
      if(response.ok){
        swal("Message successfully sent!", "I will get back to you as soon as possible.", "success");
      }
    })
    .catch(() => {
      swal("Oops!", "There was a problem, try again ", 'error');
    })
  }


  return (
    <form id="form" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="name@gmail.com"
          onChange={e => setEmail(e.target.value)}
        />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>
      <FormControl mt={5} isRequired>
        <FormLabel htmlFor="message">Message: </FormLabel>
        <Textarea
          id="message"
          type="text"
          placeholder="Your message here"
          onChange={e => setMessage(e.target.value)}
        />
      </FormControl>
      <Button mt={4} colorScheme="blue" type="submit">
        Send
      </Button>
    </form>
  )
}



export default Form
