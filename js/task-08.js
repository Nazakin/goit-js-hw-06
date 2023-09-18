const form = document.querySelector('.login-form');

  const onSubmit = (event) => {
    event.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    const emailValue = emailInput.value.trim(); 
    const passwordValue = passwordInput.value.trim();

    if (emailValue.length === 0 || passwordValue.length === 0) {
      alert('Заповни всі поля!!!!!11!!11!11');
    } else {
      const formData = {
        email: emailValue,
        password: passwordValue,
      };

      console.log(formData);

      form.reset();
    }
  };

  form.addEventListener('submit', onSubmit);