document.querySelector('#inputEmail').addEventListener('blur', validateEmail);


const reSpaces = /^\S*$/;
const reFSname = /^[a-z ,.'-]+$/i;


function validateEmail(e) {
    const email = document.querySelector('#inputEmail');
    const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

    if (reSpaces.test(email.value) && re.test(email.value)) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');

        return true;
    } else {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');

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
                    !validateEmail()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else
                    form.classList.add('was-validated')
            }, false)
        })
})()
