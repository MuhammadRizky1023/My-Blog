const express = require('express');

const mongoose = require('mongoose');

const methodOverride = require('method-override')

const app = express();

mongoose.connect('mongodb://localhost:27017/idstack_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.set('views', './src/views')
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: false,
}))

app.use(methodOverride('_method'))

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

require('./src/routers/home.routes')(app);
require('./src/routers/blog.routes')(app);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`starting developer server: http://localhost:${PORT}`);
});