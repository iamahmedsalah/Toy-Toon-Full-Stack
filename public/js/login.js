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



document.querySelector('#inputEmail').addEventListener('blur', validateEmail);

document.querySelector('#inputPassword').addEventListener('blur', validatePassword);



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
                    !validateEmail() || !validatePassword()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else
                    form.classList.add('was-validated')
            }, false)
        })
})()


// // DropDown Login 
// $(function () {
//     var dd1 = new dropDown($("#myDropdown"));
  
//     $(document).click(function () {
//       $(".wrapper-dropdown").removeClass("active");
//     });
//   });
  
//   function dropDown(el) {
//     this.dd = el;
//     this.placeholder = this.dd.children("span");
//     this.opts = this.dd.find("ul.dropdown > li");
//     this.val = "";
//     this.index = -1;
//     this.initEvents();
//   }
//   dropDown.prototype = {
//     initEvents: function () {
//       var obj = this;
  
//       obj.dd.on("click", function () {
//         $(this).toggleClass("active");
//         return false;
//       });
  
//         //   obj.opts.on("click", function () {
//         //     var opt = $(this);
//         //     obj.val = opt.text();
//         //     obj.index = opt.index();
//         //     obj.placeholder.text(obj.val);
//         //   });
//     }
//   };