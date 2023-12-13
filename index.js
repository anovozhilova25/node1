let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); //Для принятия данных из формы. Обязательно!!!
app.use(bodyParser.json());//Для принятия данных из формы. Обязательно!!!

let index = require('../Routes/index');
app.use('/', index);

let article = require('../Routes/article');
app.use('/article', article);

let admin = require('../Routes/admin');
app.use('/admin', admin);

app.listen(3000);