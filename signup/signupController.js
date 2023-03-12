export function signupController(signupElement) {
  signupElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const passwordElement = signupElement.querySelector("#password");
    const passwordConfirmElement =
      signupElement.querySelector("#passwordConfirm");

    if (passwordElement.value !== passwordConfirmElement.value) {
      alert("Las contraseñas no son iguales");
    }
    const mailRegExp = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    const emailElement = signupElement.querySelector("#username");
    if (!mailRegExp.test(emailElement.value)) {
      alert("El email no está bien escrito");
    }

    if (isEmailValid() && arePasswordsValid()) {
      // creamos el usuario
    }
  });
}
