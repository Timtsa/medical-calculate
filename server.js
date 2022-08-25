let express = require('express');

let app =express();

app.use(express.static(__dirname +'/dist/medical-calculate'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname +'/dist/medical-calculate/index.html');
} );

app.listen(process.env.PORT || 8080);