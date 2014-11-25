// routes.js

Router.configure({
  layoutTemplate: 'CommonTemplate',
})

Router.route('/', function () {
  this.render('Home');
});

Router.route('/public', function () {
  this.render('Public');
});

Router.route('/private', function () {
  this.render('Private');
});

Router.route('/admin', function () {
  this.render('Admin');
});
