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

    if (!isValidEmail || !isValidPassword) {
       alert("Invalid Email or Password");

    }
    else {
      Meteor.call('loginUser', emailAddress, password, function (error, result) {
          if (error) {
            console.log(error)
            alert('Credentials invalid or Check internet connection')
  // handle error
            }
            else {
              console.log(result)
                Session.setAuth('userData', JSON.parse(result.content))
              var x= Session.get('userData')
                var token = x.auth_token;
                console.log(token)
               Meteor.call('posts', token, function (error, result){
                if (error) {
                  console.log(error)
                  alert('posts invalid or Check internet connection')

                }
                else {
                  console.log("Hi");
                  console.log(result)
                  Router.go('home');
               }
               });



            }
});
    }
  }
});
