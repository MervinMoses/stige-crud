
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
const port = process.env.PORT || 3000;
const DB_CONNECT = "mongodb+srv://crud:123321@cluster0.xqxsb.mongodb.net/user?retryWrites=true&w=majority";
mongoose
	.connect(DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((res) => console.log("Server Up and running"))
	.catch((err) => console.log(err));
