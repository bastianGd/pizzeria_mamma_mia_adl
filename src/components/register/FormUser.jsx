import { useState } from "react";
// import Swal from 'sweetalert2';
// import ValidationForm from "../../Utils/validaciones/ValidationForm";
import UserReg from "./UserReg";

const FormUser = () => {
    const [user, setUser] = useState({
        userEmail: "",
        userPassword: "",
        repeatPassword: "",
    });

    const handleChange = (e) => {
        console.log(e)
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            userEmail: "",
            userPassword: "",
            repeatPassword: "",
        });
    }

    //     if (ValidationForm(user)) {
    //         Swal.fire({
    //             title: 'Creación de cuenta',
    //             text: 'Cuenta creada con éxito',
    //             icon: 'success',
    //             confirmButtonText: '¡Gracias!',
    //         });

    //         
    // };

    return (
        <>
            <UserReg
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                user={user}
            />
        </>
    );
};

export default FormUser
