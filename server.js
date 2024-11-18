
const express = require('express');

const PORT = 3000;

const app = express ();

const hbs = require('hbs');

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.get('/index' , (req, res) =>{

   res.render('index');

});

app.get('/about', (req,res)=>{
   res.render('about')
});

app.get('/contact', (req,res)=>{
   res.render('contact')
});

app.get('*', (req,res)=>{
   res.send('<h1 style="color:red"> ERROR 404 NOT FOUND</h1>')
});


app.listen(PORT, ()=>{
   console.log(`Servidor express escuchando en el puerto ${PORT}`)
});

app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).render("ERROR 500", 
       {
           error: err.message,
       }
   );
});