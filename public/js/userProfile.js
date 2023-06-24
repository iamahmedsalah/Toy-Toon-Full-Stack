
// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                // Close the clicked dropdown
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');
    
            } else {
                // Close the opend dropdown
                closeDropdown();
    
                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }

    if(dropDown.classList.contains('hover-dropdown') === true){

        dropDown.onmouseover  =  dropDown.onmouseout = dropdownHover;

        function dropdownHover(e){
            if(e.type == 'mouseover'){
                // Close the opend dropdowns
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
                
            }
        }
    }

};


// Listen to the doc click
window.addEventListener('click', function (e) {

    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
        // Close the opend dropdown
        closeDropdown();
    }

});


// Close the openend Dropdowns
function closeDropdown() { 
    console.log('run');
    
    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.dropdown-container').forEach(function (container) { 
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('dropdown-active');
    });
}


document.querySelector('#firstName').addEventListener('blur', validateUsername);
document.querySelector('#lastName').addEventListener('blur', validateSurname);
document.querySelector('#Phone').addEventListener('blur', validatePhone);


const reSpaces = /^\S*$/;
const reFSname = /^[a-z ,.'-]+$/i

function validateUsername(e) {
  const username = document.querySelector('#firstName');
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
  const secname = document.querySelector('#lastName');
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



function validatePhone() {
  const Phone = document.querySelector('#Phone');
  const rec = /^01[0125][0-9]{8}$/
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




(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity() ||
         !validateUsername() || !validateSurname() || !validatePhone()) {
          event.preventDefault()
          event.stopPropagation()
        } else
          form.classList.add('was-validated')
      }, false)
    })
})()


