var Future;

Future = Npm.require('fibers/future');

if (Meteor.isServer) {
  Meteor.methods({
    loginUser: function(email, password) {
      var error, queryEndpoint, querydata, res;
      this.unblock();
      queryEndpoint = Meteor.settings.flippy.login
      querydata = {
        data: {
          email: "" + email,
          password: "" + password
        }
      };
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