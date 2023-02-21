// Định nghĩa server
let express=require('express');
let app=express();

// set public folder
app.use(express.static(__dirname+'/public'));
// set port và start server
app.set('port',(process.env.PORT||5000));
// start server
app.listen(app.get('port'),()=>{
    console.log('Server is running in port ',app.get('port'));
})


