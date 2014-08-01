var restify = require('restify');

// Functions for a quick response

function respondOne(req, res, next) {
	console.log('responding with a 1');
	res.send('1');

	next();
}

function respondTwo(req, res, next) {
	console.log('responding with a 2');
	res.send('2');

	next();
}

function respondDjent(req, res, next) {
	console.log('THALL');
	res.send('000000000-0-000-0-0-0000-0-0-00-000-00-0');

	next();
}

// Creating the server
var server = restify.createServer({name: 'tryMe'});

// Setting the get
server.get('/one', respondOne);
server.get('/two', respondTwo);
server.get('/djent', respondDjent);

// Setting the head
server.head('/one', respondOne);
server.head('/two', respondTwo);
server.head('/djent', respondDjent);


// The audience is listening
server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});
