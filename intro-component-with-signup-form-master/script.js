const form = document.getElementById('form');





form.addEventListener('submit',e=>{
    e.preventDefault();

    const first = form['FirstName'].value;
    const last = form['LastName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(first === ''){
        addErrorTo('FirstName','First Name is Required')
    }
    else{
        removeError('FirstName');
    }
    if (last === '') {
        addErrorTo('LastName', 'Last Name is Required')
    }
    else {
        removeError('LastName');
    }
    if (email === '') {
        addErrorTo('email', 'Email is Required')
    }
    else {
        removeError('email');
    }
    if (password === '') {
        addErrorTo('password', 'Password is Required')
    }
    else {
        removeError('password');
    }
});

function addErrorTo(field,message){
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = formControl.querySelector('small'); 

    small.innerText = message;
    
}
function removeError(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
}