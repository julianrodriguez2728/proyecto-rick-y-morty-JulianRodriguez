const validation = (userData) => {

    let errors = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

    if(!regexEmail.test(userData.username)) errors.username =  'Invalid username'

    if(!userData.username) errors.username = 'This field can´t be empty' 

    if(userData.username.length > 35) errors.username = 'Email can´t be over 35 characters'

    if(!userData.password.match(/\d/)) errors.password = 'Should have a least one number'

    if(userData.password.length < 6 || userData.password.length > 10) errors.password = 'Must contain between 6 and 10 characters'

    return errors;

}

export default validation;