import mysql from "mysql2";
import dotenv from "dotenv";
// import url from "url"

dotenv.config({ path: "./.env" });
console.log(process.env.MYSQLDATABASE);

let connection;

export const connectDB = () => {
  try {
    const dbUrl = process.env.DATABASE_URL;
    const parsedUrl = new URL(dbUrl);
    connection = mysql.createConnection({
        host: process.env.MYSQLHOST || parsedUrl.hostname ,
        user: process.env.MYSQLUSER || parsedUrl.username,
        password: process.env.MYSQLPASSWORD || password ,
        database: process.env.MYSQLDATABASE || parsedUrl.pathname.replace("/", ""),
        port: process.env.MYSQLPORT || parsedUrl.port
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
