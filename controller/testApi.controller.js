import { pool } from "../config/database.config.js";

export default async function getTest (req, res, next) {
  try {
    const rows = await pool.query("select * from recette ")
    console.log(rows)
    res.send(rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error)
  }
  
}


export  async function getTestingr (req, res, next) {
  try {
    const rows = await pool.query("select * from ingredients ")
    console.log(rows)
    res.send(rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error)
  }
  
}

export  async function getingrct (req, res, next) {
  try {
    const rows = await pool.query("select * from recipe_ingr  ")
    console.log(rows)
    res.send(rows);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error)
  }
  
}

// export  async function getmodop (req, res, next) {
//   try {
//     const rows = await pool.query("select * from recipe_ingr  ")
//     console.log(rows)
//     res.send(rows);
//   } catch (error) {
//     console.log("🚀 ~ getTest ~ error:", error)
//   }
  
// }