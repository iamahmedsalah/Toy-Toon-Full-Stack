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
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});



document.querySelector('#email').addEventListener('blur', validateEmail);

document.querySelector('#password').addEventListener('blur', validatePassword);

document.querySelector('#Fname').addEventListener('blur', validateUsername);
document.querySelector('#Sname').addEventListener('blur', validateSurname);
document.querySelector('#phone').addEventListener('blur', validatePhone);


const reSpaces = /^\S*$/;
const reFSname = /^[a-z ,.'-]+$/i

function validateUsername(e) {
  const username = document.querySelector('#Fname');
  if (reFSname.test(username.value)) {
    username.classList.remove('is-invalid');
    username.classList.add('is-valid');
    return true;
  } else {
    username.classList.remove('is-valid');

    username.classList.add('is-invalid');
    return false;
  }
}
function validateSurname(e) {
  const secname = document.querySelector('#Sname');
  if (reFSname.test(secname.value)) {
    secname.classList.remove('is-invalid');
    secname.classList.add('is-valid');
    return true;
  } else {
    secname.classList.remove('is-valid');

    secname.classList.add('is-invalid');
    return false;
  }
}

function validateEmail(e) {
  const email = document.querySelector('#email');
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

function validatePhone() {
  const Phone = document.querySelector('#phone');
  const rec = /^\d{10}$/;
  if (rec.test(Phone.value)) {
    Phone.classList.remove('is-invalid');
    Phone.classList.add('is-valid');
    return true;
  } else {
    Phone.classList.remove('is-valid');

    Phone.classList.add('is-invalid');
    return false;
  }

}


function validatePassword() {
  const password = document.querySelector('#password');
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
          !validateEmail() || !validateUsername() || !validateSurname() || !validatePhone() || !validatePassword()) {
          event.preventDefault()
          event.stopPropagation()
        } else
          form.classList.add('was-validated')
      }, false)
    })
})()


