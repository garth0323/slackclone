Meteor.startup(function () {
  smtp = {
    username: 'garth0323@gmail.com',
    password: 'sWHo4qy6dPIpoj_FXEk2Cw',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});