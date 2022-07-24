import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
const FormComponent = () => {
  return (
    <Form className="mt-5">
      <Form.Group   controlId="formBasicEmail">
        <Form.Label className="text-primary">Email address:</Form.Label>
        <Form.Control type="email" className="form-control form-control-lg " placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group  className="mt-5" controlId="formBasicPassword">
        <Form.Label className="text-primary">Password:</Form.Label>
        <Form.Control  type="password" className="form-control form-control-lg "   placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="mt-6 ">
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent