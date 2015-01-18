var fs = require('fs'),
	express = require('express'),
	cors = require('cors'),
	compress = require('compress'),
	app = express(),
	db = {
		db: require('pouchdb')('storage'),

		put: function (id, data) {
			db.db.get(id, function (a, b) {
				if (!a && !!b && !!b._id) {
					db.db.put({_id: id, data: data, _rev: b._rev});
				}
				else {
					db.db.post({_id: id, data: data});
				}
			})
		},

		get: function (id, success, failure) {
			db.db.get(id, function (a, b) {
				if (!a && !!b && !!b.data) {
					(success || function () {})(b.data);
				}
				else {
					(failure || function () {})();
				}
			});
		}
	}





db.put('123', {a:123123})
db.get('123', function (a) {
	console.log(a)
})