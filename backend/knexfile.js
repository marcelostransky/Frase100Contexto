module.exports = {

    development: {
        client: 'mssql',
        connection: {  
            user: 'usr_avalia',  
            password: 'admSP*98-#',  
            server: '10.0.30.5',  
            database: 'TiLegal',
            options: {
                enableArithAbort : true
            }  
           } ,
        useNullAsDefault: true,
      },
    
      staging: {
        client: 'postgresql',
        connection: {
          database: 'my_db',
          user:     'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
      },
    
      production: {
        client: 'postgresql',
        connection: {
          database: 'my_db',
          user:     'username',
          password: 'password'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
      }

}