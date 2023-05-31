// Preloader
window.addEventListener('load', () => {
    const loader = document.querySelector('.Preloader');
    loader.classList.add('Preloader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.classList.remove('Preloader')
    })
})



// --------Show Hide Paswword----//
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#inputPassword");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") == "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});



document.querySelector('#inputPassword').addEventListener('blur', validatePassword);

const reSpaces = /^\S*$/;






function validatePassword() {
    const password = document.querySelector('#inputPassword');
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
    if (re.test(password.value) && reSpaces.test(password.value)) {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');

        return true;
    } else {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');

        return false;
    }
}



(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity() ||
                    !validatePassword()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else
                    form.classList.add('was-validated')
            }, false)
        })
})()
