const { GetUsers } = require('../models/Users') ;

const home = async ( req , res ) => {
    
    const  resp = await GetUsers() ;
    console.log( 'FOO*' , '' );
    res.send( resp );
};

module.exports = { home } ;