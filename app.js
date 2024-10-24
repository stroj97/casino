const express = require('express');
const path = require('path');
const app = express();
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
