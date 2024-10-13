/**------------------------------------------------------------------------
 **                            SEQUELIZE IMPORTS
 *------------------------------------------------------------------------**/

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/database.js');

// const sequelize = new Sequelize({
//     dialect: 'mysql'
// })

const Users = sequelize.define(
    "Users",
    {
        // Model attributes
        fname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phnumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        feedback: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        timestamps: false
    }
);


module.exports = Users;


