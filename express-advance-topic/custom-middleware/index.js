const express = require('express');
const app = express();
const authen = require('./logger');
app.use(express.json());

//create custom middleware
app.use(function(req,res,next){
    console.log('logging....');
    next();
})

//import from another file
app.use(authen);

app.get('/test', (req, res) => {
    res.send('Test route hit');
});

app.listen(3000,()=> console.log('Listening on the port 3000..'))