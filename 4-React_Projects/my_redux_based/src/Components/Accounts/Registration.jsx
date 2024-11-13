import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
    terms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
  });
  
  export default    function RegistrationForm() {
    return (
      <Container className="d-flex justify-content-center align-items-center  custom_css min-vh-100 ">
        <Row className="w-100">
          <Col md={6} lg={4} className="mx-auto">
            <div className="p-4 shadow rounded bg-light">
              <h2 className="mb-4 text-center">Registration Form</h2>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  terms: false
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log('Form Data', values);
                  alert('Form Submitted Successfully!');
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
  
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
  
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && !!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
  
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        
                        isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>
  
                    <Form.Group className="mb-3" controlId="formTerms">
                      <Form.Check
                        type="checkbox"
                        name="terms"
                        label="I agree to the terms and conditions"
                        checked={values.terms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.terms && !!errors.terms}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.terms}
                      </Form.Control.Feedback>
                    </Form.Group>
  
                    <Button variant="dark" type="submit" className="w-100">
                      Register
                    </Button>
  
                    <div className="mt-3 text-center">
                      <span>Already have an account? <a href="#login">Login here</a></span>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  