const input = document.getElementById('validation-input');

const onBlur = () => {
    if (input.value.length > 6) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}

input.addEventListener('blur', onBlur);

