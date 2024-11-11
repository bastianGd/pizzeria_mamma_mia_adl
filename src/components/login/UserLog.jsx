import { useState } from "react";
import Swal from 'sweetalert2';
import Login from "../login/FormLog"; // 
import Validacion from "../../Utils/validacion/Validacion";

const UserLog = () => {
    const [user, setUser] = useState({
        userEmail: "",
        userPassword: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar los datos del usuario
        const validationError = Validacion(user);
        if (validationError) {
            setError(validationError); 
        } else {
            setError(""); 
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: '¡Has iniciado sesión correctamente!',
                confirmButtonText: 'Aceptar'
            });
            
            setUser({
                userEmail: "",
                userPassword: "",
            });
        }
    };

    const handleChange = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }));

        setError(""); 
    };

    return (
        <Login
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user}
            error={error}
        />
    );
};

export default UserLog;
