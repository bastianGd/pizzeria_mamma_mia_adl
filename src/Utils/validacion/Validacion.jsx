const Validacion = (user) => {
    const { userEmail, userPassword, passwordRepeat } = user;

    if (!userEmail) {
        return "Debes agregar tu correo electrónico";
    }

    if (!userPassword) {
        return "Debes agregar tu contraseña";
    }

    if (userPassword !== passwordRepeat) {
        return "Las contraseñas no coinciden";
    }

    return null;
};

export default Validacion;
