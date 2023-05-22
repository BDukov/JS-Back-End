const hendlebars = require('express-handlebars');

function handlebarsConfig(app){
    app.engine('hbs', hendlebars.engine({
        extname: 'hbs',
      //  layoutsDir: 'src/views/layouts',
    }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
}

module.exports = handlebarsConfig;