const app = require('./app');

app.listen(app.settings.port, () => {
    console.log(`Running on ${app.settings.port}`);
})

// mongodb://dkm:roger456@ds123444.mlab.com:23444/dkm-forms-app