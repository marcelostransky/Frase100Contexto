const knex = require('knex');
const configuration = require('../../knexfile')

const connection = knex(configuration.development);

module.exports = connection;



// var sql = require('mssql');
// var configuration = require('../../configFile');

// sql.connect(configuration.config,function(err){
//     if(err) console.log(err);
    // sql.Open();
    // let sqlRequest = new sql.Request();
    // let sqlQuery = 'SELECT TOP (1000) [Autor],[Data],[Mensagem],[id] FROM [Avalia].[dbo].[tb_frase_contexto]';
    // sqlRequest.query(sqlQuery,function(err,data){
    //     if(err)console.log(err);

    //     console.table(data.recordset);

    //     sql.close();
    // })
// 
// })
// module.exports = sql;

