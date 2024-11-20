import { pool } from "../config/database.config.js";

export default async function getTest (req, res, next) {
  try {
    const rows = await pool.query("SELECT * FROM ingredients")
    console.log(rows)
    res.send(rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error)
  }
  
}
