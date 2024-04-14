const { Pool } = require('pg');
// const Pool =require('pg').Pool;

//const pool =new Pool(
    const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"student1",
    password:"password",
    port:5432,
});


module.exports =pool;