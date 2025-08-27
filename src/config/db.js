import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

let connection;

export const connectDB = () => {
  try {
    connection = mysql.createConnection(process.env.DATABASE_URL);

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
