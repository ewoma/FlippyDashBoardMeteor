// Router.route("/",function(){
//   this.render("home");
// },
// {
//   layoutTemplate:"masterLayout"
// });
//
// Router.route("/userPost",function(){
//   this.render("userPost");
//
// });

Router.configure({
  layoutTemplate: "masterLayout",

})

Router.route('/', function(){
this.render('home');
},
{
  name: 'home',
  data: function(){
  }
});
Router.route('/userPost', function(){
  this.render('userPost');
});
Router.route('/activeUsers', function(){
  this.render('activeUsers');
});
Router.route('/todayUsers', function(){
  this.render('todayUsers');
});
Router.route('/allTopics', function(){
  this.render('allTopics');
});
Router.route('/todayTopics', function(){
  this.render('todayTopics');
});
Router.route('/communityTopics', function(){
  this.render('communityTopics');
});
Router.route('/postAuthor', function(){
  this.render('postAuthor');
});
Router.route('/postLike', function(){
  this.render('postLike');
});
Router.route('/postView', function(){
  this.render('postView');
});
Router.route('/UGChannel', function(){
  this.render('UGChannel');
});
Router.route('/UGUsers', function(){
  this.render('UGUsers');
});
Router.route('/UGPosts', function(){
  this.render('UGPosts');
});
Router.route('/KNUSTChannel', function(){
  this.render('KNUSTChannel');
});
Router.route('/KNUSTUsers', function(){
  this.render('KNUSTUsers');
});
Router.route('/KNUSTPosts', function(){
  this.render('KNUSTPosts');
});
Router.route('/UCCChannel', function(){
  this.render('UCCChannel');
});
Router.route('/UCCUsers', function(){
  this.render('UCCUsers');
});
Router.route('/UCCPosts', function(){
  this.render('UCCPosts');
});
Router.route('/CBITChannel', function(){
  this.render('CBITChannel');
});
Router.route('/CBITUsers', function(){
  this.render('CBITUsers');
});
Router.route('/CBITPosts', function(){
  this.render('CBITPosts');
});
