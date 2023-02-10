
const regexEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const regexPassword=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

export default function validate(inputs){
    let errors={}

       
    

    if(!regexEmail.test(inputs.username))errors.username='Debe ser un email';
    if(inputs.username<3)errors.username='Debe tener almenos 3 caracteres';
    if(inputs.username>35)errors.username='No puedes tener mas de 35 caracteres';

    if(!regexPassword.test(inputs.password))errors.password='La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula'

    return errors;

}