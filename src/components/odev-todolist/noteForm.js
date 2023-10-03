import React from 'react'
import { Button, Form } from 'react-bootstrap'

const NoteForm = ({handleSubmit,handleChange,setformData,formdata}) => {
  return (
    <div className='border border-success p-3 m-3' >
      <Form className='text-center' onSubmit={handleSubmit}>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter your note" className='mb-3'
        name='text'
         onChange={handleChange}/>
        <Button type='submit'  >Create Note</Button>
        </Form>
    </div>
  )
}

export default NoteForm