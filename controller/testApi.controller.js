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

export  async function getunit (req, res, next) {
  try {
    // const rows = await pool.query("explain recipe_ingr  ")
    const rows = await pool.query("SELECT COLUMN_TYPE FROM information_schema.`COLUMNS` WHERE TABLE_SCHEMA = 'bddrct'AND TABLE_NAME = 'recipe_ingr' AND COLUMN_NAME = 'unite_de_mesure'  ")

    const deleteEnum = rows[0].COLUMN_TYPE.slice(5, -1);

    let enumValues = deleteEnum.split(',')

    enumValues = enumValues.map(value => value.trim().replace(/'/g, ''))
    res.send(enumValues);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error)
  }
}



export  async function postrct (req, res, next) {
  try {
    const {Nom_recette, Ingredients_recette,Quantité_ingredient,Unit_mesure,Mode_operatoire } = req.body
    console.log("🚀 ~ postrct ~ req.body:", req.body)

    const rct = await pool.query("insert into recette(nom,mode_operatoire)values(?,?)",[Nom_recette, Mode_operatoire]);

    // const ing=await pool.query("insert into ingredients(nom) values(?) ",[Ingredients_recette]);

    res.sendStatus(200);
  } catch (error) {
    console.log("🚀 ~ getTest ~ error:", error)
    res.sendStatus(500);
  } 
}