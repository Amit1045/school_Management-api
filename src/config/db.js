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
        host:  parsedUrl.hostname ,
        user:  parsedUrl.username,
        password:  password ,
        database:  parsedUrl.pathname.replace("/", ""),
        port:  parsedUrl.port
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
