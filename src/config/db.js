import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
console.log(process.env.MYSQLDATABASE);

let connection;

export const connectDB = () => {
  try {
    connection = mysql.createConnection({
        host: process.env.MYSQLHOST,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD ,
        database: process.env.MYSQLDATABASE,
        port: process.env.MYSQLPORT 
    });

    connection.connect((err) => {
      if (err) {
        console.error("DB Connection Failed:", err);
      } else {
        console.log("MySQL connected!");
      }
    });
  } catch (err) {
    console.error("DB Connection Failed:", err);
  }
};

export { connection };
