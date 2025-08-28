import express from "express"
import { connection } from "../config/db.js"; 
const router = express.Router()

router.get("/listSchools",(req, res) => {
    const { latitude, longitude } = req.query;
  
    if (!latitude || !longitude) {
      return res.status(400).json({ error: "Latitude and Longitude are required" });
    }
  
    const sql = `
      SELECT id, name, address, latitude, longitude,
      (6371 * ACOS(
        COS(RADIANS(?)) * COS(RADIANS(latitude)) *
        COS(RADIANS(longitude) - RADIANS(?)) +
        SIN(RADIANS(?)) * SIN(RADIANS(latitude))
      )) AS distance
      FROM schools
      ORDER BY distance ASC
    `;
  
    connection.query(sql, [latitude, longitude, latitude], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });


router.post("/addSchool", (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // check all field must filled successfully
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({  error: "All fields are required" });
  }

  const sql = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  connection.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) throw err;
    res.json({ message: "School added successfully", schoolId: result.insertId });
  });
});


export default router;