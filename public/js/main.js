
// Preloader
window.addEventListener('load', () => {
    const loader = document.querySelector('.Preloader');
    loader.classList.add('Preloader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.classList.remove('Preloader')
    })
})


// Contact Us
const contactForm = document.querySelector('.custom-form ');
console.log(contactForm)
let contactName = document.getElementById('contact-name');
let contactEmail = document.getElementById('contact-email');
let contactCompany = document.getElementById('contact-company');
let contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', (err) => {

    err.preventDefault();
    let formData = {
        contactName: contactName.value,
        contactEmail: contactEmail.value,
        contactCompany: contactCompany.value,
        contactMessage: contactMessage.value
    }
    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = () => {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {

            document.getElementById('success-alert').classList.remove('hide')
            // alert(' Email Sent');
            contactName.value = '';
            contactEmail.value = '';
            contactCompany.value = '';
            contactMessage.value = '';
        } else {
            alert(' Something went wrong !!');
        }
    }
    xhr.send(JSON.stringify(formData));
})





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

