const express =  require('express')  ;
const app     =  express() ;
const routes  =  require('./routes') ;

app.use( routes ) ;
app.use( express.json() ) ;

app.listen( 3000, () =>  console.log('Server on port 3000') )