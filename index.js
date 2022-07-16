const form = document.getElementById('form')
const fname = document.getElementById('fname')
const sname = document.getElementById('sname')
const email = document.getElementById('email')
const pwd = document.getElementById('pwd')
const repwd = document.getElementById('repwd')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button clicked')
    checkInputs();
})
const checkInputs = () => {
    const fnameValue = fname.value.trim();
    const snameValue = sname.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = pwd.value.trim();
    const repwdValue = repwd.value.trim();

    const isEmailValid = (email) =>{
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    console.log(snameValue)
    if(fnameValue === ''){
        setErrorFor(fname, 'First name cannot be blank.')
    } else {
        //add success class
        setSuccessFor(fname);
    }
    if(snameValue === ''){
        setErrorFor(sname, 'Last name cannot be blank.')
    } else {
        //add success class
        setSuccessFor(sname);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank.')
    } else if (!isEmailValid(emailValue)){
        setErrorFor(email, 'Email is not valid.')
    }else {
        //add success class
        setSuccessFor(email);
    }
    if(pwdValue === ''){
        setErrorFor(pwd, 'Password cannot be blank')
    } else{
        setSuccessFor(pwd)
    }
    if(repwdValue !== pwdValue){
        setErrorFor(repwd, "Passwords do not match!")
    }else if(repwdValue === '') {
        setErrorFor(repwd, 'This cannot be blank.')
    }else{
        setSuccessFor(repwd)
    }
}
const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error'
}

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
const isEmail = (email) =>{
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}