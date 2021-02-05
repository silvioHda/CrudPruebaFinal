const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');


app.use(express.static(__dirname+'/public'));

//Express HBS Engine
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
res.render('home',{
    nombre: 'silvio',
    
});
});

app.get('/about',function(req,res){
    res.render('about');
})


 
app.listen(3000,()=>{
    console.log('escuchando peticiones en el puerto 3000');
});