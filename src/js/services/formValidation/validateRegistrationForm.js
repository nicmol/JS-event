// Notice the export statement and the import in home.js
// Notice the structure of the parameter and the return value
export default function validateRegistrationForm(formValues) {

  const result = {
    username: validateUserName(formValues.username),
    email: validateEmail(formValues.email),
    phone: validatePhone(formValues.phone),
    age: validateAge(formValues.age),
    profession: validateProfession(formValues.profession),
    experience: validateExperience(formValues.experience),
  };

  let field, isValid = true;
  for(field in result) {
    isValid = isValid && result[field];
  }

  return {
    isValid,
    result,
  };

}

/* Part 1 - Regular expressions 
   Write each of the functions below using a regular expression
   to do the actual validation whenever possible.  
   
   You can write the expressions yourself or find one on the internet.  
   
   You might test your regular expressions
   in the html page I gave you OR you might create a codepen or jsfiddle
   playground to test your functions as you write them.

   The function above calls all of these functions.  You're ready to add 
   validation to home.js.
*/

// must be longer than 3 chars.  Use a regular expression.
function validateUserName(name) {
  const pattern = /^.{3}/;
  return pattern.test(name);
}

// must be a valid email address.  Use a regular expression
function validateEmail(email) {
  //const RegEx = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
  
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return RegEx.test(email);
}

// must be a valid 10 digit phone number.  Use a regular expression
function validatePhone(phone) {
  //const RegEx = /((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/;
  const RegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return RegEx.test(phone);
}

// must be between 10 and 25 inclusive.  Use a regular expression
// to make sure that the age is a 2 digit number before checking the range.
function validateAge(age) {
  const RegEx = /^([1-9]|1[0-9]|[2-5][0-9]|10[0-9])$/;
  return RegEx.test(age);
}

// must be either school, college, trainee or employee.  No reg exp.
function validateProfession(profession) {
  const acceptedValues = ['school', 'college', 'trainee', 'employee'];
  return acceptedValues.indexOf(profession) > 1;
}

// must be between 0 and 4 years exclusive.  Use a regular expression.
function validateExperience(experience) {
  const RegEx = /^([5-9]|1[0-9]|[2-5][0-9]|10[0-9])$/
  return RegEx.test(experience);
}
