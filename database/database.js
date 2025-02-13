/**------------------------------------------------------------------------
 **                            DATABASE INITIALIZATION
 *------------------------------------------------------------------------**/

const Sequelize = require('sequelize');


const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS,
    {
        host: DB_HOST,
        dialect: 'mysql',
    });

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established succesfully')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', error)
    })


module.exports = sequelize;