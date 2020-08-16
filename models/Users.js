const { pool } = require('../libs/database') ;

const GetUsers = async () => {
    let result = await pool.query(' SELECT * FROM usuarios ');
    return result.rows ;
}


module.exports = {
    GetUsers
}