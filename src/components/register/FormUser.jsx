import UserReg from "./UserReg";
import { useState } from "react";

const FormUser = () => {
    const [userReg, setUserReg] = useState({
        userEmail: "",
        userPassword: "",
        passwordRepeat: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const handleChange = (e) => {
        setUserReg((copyUser) => ({
            ...copyUser,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <UserReg
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                user={userReg}
            />
        </>
    );
};

export default FormUser;
