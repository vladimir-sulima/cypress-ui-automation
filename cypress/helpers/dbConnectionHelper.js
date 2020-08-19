const {db_resource_arn, database_name, secret_arn} = require("../config")
var AWS = require('aws-sdk');
 
AWS.config.update({region: 'us-east-1'});


 
const { Sequelize, QueryTypes } = require('sequelize');
 
const sequelize = new Sequelize(database_name, '', secret_arn, {
    host: db_resource_arn,
    dialect: 'mysql',
    dialectModule: require('@fyreware/mysql-data-api')
});
 
module.exports = {sequelize, QueryTypes};