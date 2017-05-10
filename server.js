const express = require('express');
const path = require('path');
const app = express();
const argv = process.argv;
const port = argv[2] || 8000;
const http = require('http').Server(app);
http.listen(port, function(err) {
     if (err) {
        console.error(err);
        return;
     }
    console.log(`Listening at http://127.0.0.1:${port}`);
});

app.use('/js', express.static(path.resolve(__dirname, 'dist/js')));
app.use('/css', express.static(path.resolve(__dirname, 'dist/css')));
app.use('/img', express.static(path.resolve(__dirname, 'dist/img')));

app.get('/*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});