var mongoose = require('mongoose');

var User = mongoose.model('Users', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});


// Examples:
// ********************************************************************
// var newUser = new User({
// 	email: '  example@gmail.com '
// });

// newUser.save().then((doc) => {
// 	console.log('New user created', doc);
// }, (e) => {
// 	console.log('Unable to create a new user', e);
// });
// ********************************************************************

module.exports = {User};