const {
	MongoClient,
	ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5994d219dfa6fd202d63fba1')
	// }, {
	// 	// https://docs.mongodb.com/manual/reference/operator/update/
	// 	$set: {
	// 		completed: true

	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		name: 'Mike'
	}, {
		// https://docs.mongodb.com/manual/reference/operator/update/
		$set: {
			name: "Wei"
		},
		$inc: {
			age: +22
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});