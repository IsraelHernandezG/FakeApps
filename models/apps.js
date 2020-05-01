const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const App = new Schema ({
        name: { type: String, required: true },
        developer: { type: String, required: true },
	releasedate: { type: String, required: false },
	company: { type: String, required: false },
	version: { type: String, required: false },
});

module.exports = mongoose.model('App', App)
