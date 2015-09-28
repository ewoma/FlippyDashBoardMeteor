var Future;

Future = Npm.require('fibers/future');

if (Meteor.isServer) {
  Meteor.methods({
    loginUser: function(email, password) {
      console.log('in login user:::');
      console.log(email);
      console.log(password);
      var error, queryEndpoint, querydata, res;
      this.unblock();
      queryEndpoint = Meteor.settings.flippy.login
      querydata = {
        data: {
          email: "" + email,
          password: "" + password
        }
      };
      console.log(querydata + queryEndpoint)
      try {
        res = Meteor.http.call("POST", queryEndpoint, querydata);
        return res;
      } catch (_error) {
        error = _error;
        return error;
      }
    }
  });
}