Template.login.events({  
  'click .js-login': function (event, t) {
    event.preventDefault();
    console.log("Hello");

    // functions to validate input from password and email fields
    checkEmailIsValid = function (aString) {  
      aString = aString;
      return aString.length > 1 && aString.indexOf('@') > -1;
    }

    checkPasswordIsValid = function (aString) {  
      aString = aString || '';
      return aString.length > 7;
    }
    // end of validation functions

    
    var emailAddress = $('.email').val() || '';
    var password = $('.password').val() || '';
    
    // trim
    emailAddress = emailAddress.replace(/^\s*|\s*$/g, '');
    password = password.replace(/^\s*|\s*$/g, '');

    // validate
    var isValidEmail = checkEmailIsValid(emailAddress);
    var isValidPassword = checkPasswordIsValid(password);
    console.log(isValidEmail)
    console.log(isValidPassword)

    if (!isValidEmail || !isValidPassword) {
      if (!isValidEmail) {
        sAlert.error('Invalid email address');
      }
      if (!isValidPassword) {
        sAlert.error('Your password must be at least 8 characters long');
      }
    } 
    else {
      Meteor.loginWithPassword(emailAddress, password, function (error) {
        if (error) {
          sAlert.error('Account login failed for unknown reasons :(');
        } else {
          Router.go('loggedInHome');
        }
      });
    }
  }
});