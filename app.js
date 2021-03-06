const   express = require('express'),
        ejs =require('ejs'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        methodOverride = require('method-override'),
        dotenv = require('dotenv');

// Requiring Routes
const   indexRoutes = require('./routes/index');

const   app = express(),
        db = mongoose.connection;

// Config
dotenv.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// Routes Config
app.use("/", indexRoutes);

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});

// DB Connection
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function() { 
  console.log("Connection Successful!"); 

//    // define Schema
//    var BookSchema = mongoose.Schema({ 
//     name: String, 
//     price: Number, 
//     quantity: Number
//   }); 

//   // compile schema to model
//   var Book = mongoose.model('Book', BookSchema, 'bookstore'); 

//   // a document instance
//   var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 }); 

//   // save model to database
//   book1.save(function (err, book) { 
//     if (err) return console.error(err); 
//     console.log(book.name + " saved to bookstore collection."); 
//   }); 
});


app.listen(process.env.PORT_APP, process.env.IP, function() {
    console.log("Server is running. CRTL + C to quit.");
});