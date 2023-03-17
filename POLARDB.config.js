const mysql = require('mysql2');

const POLARDBconnection = mysql.createPool({
    host: "ecommerce.mysql.polardb.ap-south-1.rds.aliyuncs.com",
    user: "karankewat",
    password: "Karan@123",
    database: "ecom",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

if(POLARDBconnection){
    console.log("Database connected");
    module.exports = POLARDBconnection;

}else{
    console.log("Database not connected");
    
}