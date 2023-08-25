import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Button,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from 'reactstrap';
import Swal from 'sweetalert2';

export function Login() {
  const router = useRouter();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const users = [
    {
      usernameInput: 'senglyheng2001@gmail.com',
      passwordInput: 'Admin@123',
    },
  ];
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('usename', username, 'password', password);
    let input = { username, password };
    users.find((user) => {
      if (
        user.usernameInput === input.username &&
        user.passwordInput === input.password
      ) {
        localStorage.setItem('login', 'true');
        router.push('/');
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Username Or Password wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
          confirmButtonText:"Try Again",
          confirmButtonColor:"#1e5d86"
        })
      }
    });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', paddingBottom: '200px' }}
    >
      <div
        className="form-wrapper rounded "
        style={{
          width: '350px',
          margin: 'auto',
          backgroundColor: '#F7F7F7',
          padding: '50px',
        }}
      >
        <div id="logo" className="text-center">
          <img
            src=""
            alt="image"
            style={{ width: '100px', height: 'auto', marginTop: '15px' }}
          />
        </div>

        <h5 className="text-center mt-3">Login</h5>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={12}>
              <InputGroup>
                <InputGroupText>
                  <i className="fa-solid fa-at"></i>
                </InputGroupText>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Username or email"
                  onChange={(e)=>{
                    setUsername(e.target.value);
                  }}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12}>
              <InputGroup>
                <InputGroupText>
                  <i className="fa-solid fa-key"></i>
                </InputGroupText>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e)=>{
                    setPassword(e.target.value);
                  }}
                />
              </InputGroup>
            </Col>
          </Row>

          <div className="form-group d-flex justify-content-between">
            <a href="#">Reset password</a>
          </div>
          <Button className="btn btn-primary btn-block" type="submit">
            Login
          </Button>
        </Form>
        <hr />
        <p className="text-muted">Login with your account.</p>
      </div>
    </div>
  );
}
