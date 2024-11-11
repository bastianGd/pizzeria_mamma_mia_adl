import { useState } from "react";
import UserReg from "./UserReg";
import Login from "../login/Login";
import Validacion from "../../Utils/validacion/Validacion";
import Swal from 'sweetalert2';

const FormUser = () => {
    const [user, setUser] = useState({
        userEmail: "",
        userPassword: "",
        passwordRepeat: "",
    });

    const [error, setError] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationError = Validacion(user);
        if (validationError) {
            setError(validationError);
        } else {
            setError("");
            Swal.fire({
                icon: 'success',
                title: 'Cuenta creada satisfactoriamente',
                text: '¡Tu cuenta fue creada con éxito!',
                confirmButtonText: 'Muchas Gracias'
            });
            setUser({
                userEmail: "",
                userPassword: "",
                passwordRepeat: ""
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
        <UserReg
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user}
            error={error}
        />
    );
};

export default FormUser;
