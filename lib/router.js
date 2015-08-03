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
  layoutTemplate: "masterLayout"

});

Router.route('/home', function(){
this.render('home');
});
Router.route('/', function(){
  this.render('login');
},{
  layoutTemplate:'homeLayout'

});

Router.route('/notFound', function(){
  this.render('notFound');
},{
  layoutTemplate:'homeLayout'

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
Router.route('/channelOnePosts', function(){
  this.render('channelOnePosts');
});
Router.route('/channelOneMembers', function(){
  this.render('channelOneMembers');
});
Router.route('/channelTwoMembers', function(){
  this.render('channelTwoMembers');
});
Router.route('/channelTwoPosts', function(){
  this.render('channelTwoPosts');
});
Router.route('/channelThreePosts', function(){
  this.render('channelThreePosts');
});
Router.route('/channelThreeMembers', function(){
  this.render('channelThreeMembers');
});
Router.route('/channelFourMembers', function(){
  this.render('channelFourMembers');
});
Router.route('/channelFourPosts', function(){
  this.render('channelFourPosts');
});
Router.route('/todayFlips', function(){
  this.render('todayFlips');
});
Router.route('/sponsoredFlips', function(){
  this.render('sponsoredFlips');
});
Router.route('/events', function(){
  this.render('events');
});
Router.route('/battles', function(){
  this.render('battles');
});