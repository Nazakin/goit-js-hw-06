const email = document.getElementsByName('email');
const password = document.getElementsByName('password');
const form = document.querySelector('form');

const onSubmit = event => {
    event.preventDefault();
    if (email.value.length && password.value.length) {
        console.log('succes');
    }
    else {
        alert('Email or password is invalid');
    }
}

form.addEventListener("submit", onSubmit)