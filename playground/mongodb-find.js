// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	// Can also query like: ... .find({completed: false}).toArray ...
	// 	_id: new ObjectID('598a2e3c7647d7023c620a3a')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// 	console.log(JSON.stringify(count, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	// db.close();
});