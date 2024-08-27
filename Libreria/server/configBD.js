const mysql = require ('mysql2')

//conexion local

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "bd2711993",
	port:3306,
})

//conexion remota
// const connection = mysql.createConnection({
// 		host: "db4free.net",
// 		user: "jelm48",
// 		password: "George48",
// 		database: "ficha2711993",
// 		port:3306
// 	})

connection.connect((err)=>{
	if(!err){console.log("DataBase connected succesfully")}
	else{
		console.log("DataBase connection failed")
	}
})

module.exports = connection