/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserReg = () => {
    return (
        <>
            <div onChange={handleChange, handleSubmit, user} className="d-flex justify-content-center align-items-center my-5">
                <Form onSubmit={handleSubmit} className="my-5" style={{ width: 650 }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><strong>Dirección de correo electrónico</strong></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="correo@ejemplo.cl"
                            name="userEmail"
                            value={user.userEmail}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><strong>Contraseña</strong></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            name="userPassword"
                            minLength={6}
                            value={user.userpassword}
                            onChange={handleChange}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                        <Form.Label><strong>Confirmar Contraseña</strong></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Reingresa tu contraseña"
                            name="repeatPassword"
                            value={user.repeatPassword}
                            onChange={handleChange}

                        />
                    </Form.Group>

                    <Button className="mt-3" variant="success" type="submit">
                        ¡Crear cuenta🍕!
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default UserReg;
