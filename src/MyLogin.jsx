
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function MyLogin({ onLogin }) {
  const [inputUsername, setInputUsername] = useState("manikanta");
  const [inputPassword, setInputPassword] = useState("manikanta123");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputUsername === 'manikanta' && inputPassword === 'manikanta123') {
      onLogin(); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
   

    <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
      <div className="h4 mb-2 text-center">Sign In</div>

      <Form.Group className="mb-2" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={inputUsername}
          placeholder="Username: manikanta"
          onChange={(e) => setInputUsername(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={inputPassword}
          placeholder="password: manikanta123"
          onChange={(e) => setInputPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button className="w-100" variant="primary" type="submit">
        Log In
      </Button>
    </Form>
    
  );
}

MyLogin.propTypes = {
    onLogin: PropTypes.func.isRequired,
  };
