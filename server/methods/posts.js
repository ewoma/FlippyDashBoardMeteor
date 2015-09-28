var Future;

Future = Npm.require('fibers/future');

if (Meteor.isServer) {
  Meteor.methods({
    posts: function(token) {
      var error, queryEndpoint, querydata, res;
      this.unblock();
      queryEndpoint = Meteor.settings.flippy.posts;
      console.log(token)
    querydata = {
       headers:{
         Authorization:"Token #{token}"
       }
     }
      console.log(querydata + queryEndpoint)
      try {
        res = Meteor.http.call("GET", queryEndpoint, querydata);
        return res;
      } catch (_error) {
        error = _error;
        return error;
      }
    }
  });
}