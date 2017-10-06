var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true   // will trim the string, ex: "   do that  " ==> "do that"
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	},
	_creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

// Examples:
// ********************************************************************
// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo', e)
// });


// var moreTodo = new Todo({
// 	text: 'Prep dinner',
// 	completed: true,
// 	completedAt: 530
// });

// moreTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });
// ********************************************************************

module.exports = {Todo};