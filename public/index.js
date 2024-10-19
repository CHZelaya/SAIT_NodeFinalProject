/**------------------------------------------------------------------------
 **                            REGEX & FRONT END FORM VALIDATION
 *------------------------------------------------------------------------**/


const nameRegex = /^[A-Za-z0-9\s-]{1,50}$/; // Allows letters, numbers, spaces, and hyphens, 1 to 50 characters
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email format
const phoneRegex = /^\+?[0-9\s()-]{7,15}$/; // Allows digits, spaces, and some formatting characters
const cityProvinceRegex = /^[A-Za-z\s]{1,50}$/; // Allows letters and spaces, 1 to 50 characters
const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/; // Canadian postal code format
const feedbackRegex = /^[^(){}<>]{1,500}$/; // Allows any character except (), {}, <, and > to prevent script injection

/**------------------------------------------------------------------------
 **                            CONTACTPAGE.EJS FORM VALIDATION
 *------------------------------------------------------------------------**/



const handleContactForm = () => {

    event.preventDefault(); // Prevent the default form submission
    // Use querySelector to get the values of each input
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const phnumber = document.querySelector('#phnumber').value;
    const city = document.querySelector('#city').value;
    const province = document.querySelector('#province').value;
    const postalcode = document.querySelector('#postalcode').value;
    const feedback = document.querySelector('#feedback').value;

    // Validate each field using the regex patterns defined earlier
    if (!nameRegex.test(fname)) {
        alert('Invalid first name');
        return false;
    }
    if (!nameRegex.test(lname)) {
        alert('Invalid last name');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Invalid email address');
        return false;
    }
    if (!phoneRegex.test(phnumber)) {
        alert('Invalid phone number');
        return false;
    }
    if (!cityProvinceRegex.test(city)) {
        alert('Invalid city name');
        return false;
    }
    if (!cityProvinceRegex.test(province)) {
        alert('Invalid province name');
        return false;
    }
    if (!postalCodeRegex.test(postalcode)) {
        alert('Invalid postal code');
        return false;
    }
    if (!feedbackRegex.test(feedback)) {
        alert('Feedback must be between 1 and 500 characters, and cannot include special characters.');
        return false;
    }


    // If all validations pass, you can submit the form or perform further actions
    const form = document.querySelector('#contact-form'); // Get the form element
    form.submit();

}


/**------------------------------------------------------------------------
 **                            USER.EJS FORM VALIDATION
 *------------------------------------------------------------------------**/



const handleUserForm = () => {

    event.preventDefault(); // Prevent the default form submission
    // Use querySelector to get the values of each input

    const email = document.querySelector('#user-email').value;


    // Validate email field via regex pattern
    if (!emailRegex.test(email)) {
        alert('Invalid email address');
        return false;
    }
    // If all validations pass, you can submit the form or perform further actions
    const form = document.querySelector('#user-form'); // Get the form element
    form.submit();

}

