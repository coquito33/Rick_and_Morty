const Validation = (userData) => {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let errors = {};
    
    if(!validEmail.test(userData.username)) {
        errors.username = "El email es invalido"
     }
     if(!userData.username) {
        errors.username = "Ingresar el email"
     }
     if(userData.username.length>35 ) {
        errors.username = "El email puede tener hasta 35 caracteres"
     }
     if(!userData.password.match(/\d/)) {
        errors.password = "La contraseña debe incluir al menos un numero"
     }
     if(userData.password.length<6 || userData.password.length>10 ) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
     }

    return errors;
}
export default Validation;