import './general';
import validateRegistrationForm from './services/formValidation/validateRegistrationForm';
import apiCall from './services/api/apiCall';

import toastr from 'toastr';
import '../../node_modules/toastr/toastr.less';

class Home {
  constructor() {
    /* Add references to each of these elements on the page
    this.$form = 
    this.$username = 
    this.$email = 
    this.$phone = 
    this.$age = 
    this.$profession = 
    this.$experience = 
    this.$comment = 
    this.$submit = 
    this.$loadingIndicator = 
    */

    // add a submit handler to the form that calls onFormSubmit
    // you'll need the event as a parameter

  }

  /* Finish each of these UI related methods */
  /* This method packages up all of the form data into one object
     Get the data from each of the form fields.
     Notice how the experience that is checked is retrieved.
  */
  getFormValues() {
    return {
      username: "",
      email: "",
      phone: "",
      age: "",
      profession: "",
      experience: parseInt(document.querySelector('input[name="experience"]:checked').value),
      comment: "",
    };
  }

  /* This method clears each of the form fields.
     It gets called after the form is submitted successfully.
  */
  resetForm() {
    this.$username.value = '';
    this.$profession.value = 'school';
    this.$experience.checked = true;
  }

  /* This method styles each of the form fields that contains an error.
     It gets called after the form is validated when errors occurr.
  */
  highlightErrors(result) {
    if(!result.username) {
      this.$username.parentElement.classList.add('has-error');
    }
  }

  /* This method removes the style for errors from all form fields.
     It gets called after the form is validated.
  */
  clearErrors() {
    this.$username.parentElement.classList.remove('has-error');
  }

  onFormSubmit(event) {
    // make sure the form is not submitted
    // get the values from the form and store in a variable
    /* call the validateRegistrationForm method 
       pass variable from line above as a parameter.
       It will return an object that you should store in a varable
    */

    // if the form is valid
    //    clear the errors
    //    call submitForm with the values from the form as a parameter
    // otherwise
    //    clear all of the errors
    //    highlight the errors
    // end if

    // TEST NOW.  Everything should work but the ajax call
  }

  submitForm(formValues) {

    // hide the submit button
    // show the loading indicator
    /* call apiCall and
       pass 'registration', the form values, and POST as parameters
       When the ajax call returns successfully
          show the submit button
          hide the loading indicator
          use toastr to show the response message
          toastr.success(response.message);
          reset the form
       When there's an error
          show the submit button
          hide the loading indicator
          use toastr to show an error message
          toastr.error('Error!');
    */
  }
}

// add a window onload handler. 
// It should create an (unnamed) instance of the class for this page

