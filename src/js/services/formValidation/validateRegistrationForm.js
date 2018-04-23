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

// must be longer than 3 chars
function validateUserName(name) {
  return true;
}

// must be a valid email address.  Use a regular expression
function validateEmail(email) {
  true;
}

// must be a valid 10 digit phone number.  Use a regular expression
function validatePhone(phone) {
  return true;
}

// must be between 10 and 25 inclusive
function validateAge(age) {
  return true;
}

// must be either school, college, trainee or employee
function validateProfession(profession) {
  return true;
}

// must be between 0 and 4 years exclusive
function validateExperience(experience) {
  return true;
}
