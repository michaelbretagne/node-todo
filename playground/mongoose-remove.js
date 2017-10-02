const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove({id: '59d299021ed01cfa93ee2019'}).then((todo) => {
// 	console.log(todo);
// })

Todo.findByIdAndRemove('59d299021ed01cfa93ee2019').then((todo) => {
	console.log(todo);
});