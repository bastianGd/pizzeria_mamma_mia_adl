/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({ handleSubmit, handleChange, user, error }) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <Form onSubmit={handleSubmit} className="my-5" style={{ width: 650 }}>
        {/* Email  */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><strong>Dirección de correo electrónico</strong></Form.Label>
          <Form.Control
            type="email"
            placeholder="correo@ejemplo.cl"
            name="userEmail"
            value={user.userEmail}
            onChange={handleChange}
          />
          {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
        </Form.Group>

        {/* Password  */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><strong>Contraseña</strong></Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            name="userPassword"
            value={user.userPassword}
            onChange={handleChange}
          />
          {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
        </Form.Group>

        <Button className="mt-3" variant="success" type="submit">
          ¡Crear cuenta🍕!
        </Button>
      </Form>
    </div>
  );
};

export default Login;
