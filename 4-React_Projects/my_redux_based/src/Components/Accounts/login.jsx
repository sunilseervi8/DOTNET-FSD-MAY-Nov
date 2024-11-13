import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

function LoginForm() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className="p-4 shadow rounded bg-light">
            <h2 className="mb-4 text-center">Login Form</h2>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log('Form Data', values);
                alert('Login Successful!');
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

                  <Button variant="dark" type="submit" className="w-100">
                    Login
                  </Button>

                  <div className="mt-3 text-center">
                    <span>Don't have an account? <a href="#register">Register here</a></span>
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

export default LoginForm;
