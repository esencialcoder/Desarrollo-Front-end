export function signupController(signupElement) {
  signupElement.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isFormValid(signupElement)) {
      // crear usuario
    }
  });

  function isPasswordValid(signupElement) {
    const mailRegExp = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    const emailElement = signupElement.querySelector("#username");

    if (!mailRegExp.test(emailElement.value)) {
      alert("El email no está bien escrito");
      return false;
    }

    return true
  }

  function isEmailValid(signupElement) {
    const passwordElement = signupElement.querySelector("#password");
    const passwordConfirmElement =
      signupElement.querySelector("#passwordConfirm");

    if (passwordElement.value !== passwordConfirmElement.value) {
      alert("Las contraseñas no son iguales");
      return false
    }

    return true;
  }
}

function isFormValid(signupElement) {
  return isEmailValid(signupElement) && isPasswordValid(signupElement);
}
