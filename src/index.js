const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const port = 3000;
const app = express();

// Assets static
app.use('/static', express.static(path.join(__dirname, 'public')));

// view engine
app.engine('hbs', hbs({
    extname: ".hbs",
    layoutDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir: path.join(__dirname, 'resources/views/layouts/partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page',
        people: ['John Doe', 'Leo Messi', 'Hung Nguyen'],
    });
});
app.get('/product', (req, res) => {
    res.render('product', {
        'title': 'Product detail',
        message: 'This is product page'
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});